import { AddRounded } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { addtoCart } from "../../../store/cartSlice";
import "./itemCard.css";

const ItemCard = ({ id, itemId, imgSrc, name, price }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addtoCart({ id, itemId, imgSrc, name, price: Number(price), quantity: 1 })
    );
  };
  return (
    <div className="itemCard" id={itemId}>
      <div className="imgBox">
        <img src={imgSrc} alt="" className="itemImg" />
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
