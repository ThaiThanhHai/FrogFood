import { AddRounded } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addtoCart } from "../../../store/cartSlice";
import { useNavigate } from "react-router-dom";
import "./itemCard.css";

const ItemCard = ({ id, category, image, name, price, quantity }) => {
  const currentUser = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
  const Carts = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = async () => {
    if (currentUser.username) {
      dispatch(
        addtoCart({
          id,
          category,
          image,
          name,
          price: Number(price),
          quantity: 1,
          isPayment: false,
          user: currentUser.email,
        })
      );
      toast.success("Bạn đã thêm vào giỏ hàng");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="itemCard" id={category}>
      <div className="imgBox">
        <img src={image} alt="" className="itemImg" />
      </div>
      <div className="itemContent">
        <h3 className="itemName">{name}</h3>
        <div className="bottom">
          <h3 className="price">
            {price}
            <span>đ</span>
          </h3>
          <button className="addtoCart" onClick={handleAddToCart}>
            <AddRounded />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
