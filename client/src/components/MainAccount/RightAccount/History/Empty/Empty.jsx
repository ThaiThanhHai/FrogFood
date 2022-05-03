import "./empty.css";
import { useNavigate } from "react-router-dom";

const Empty = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div className="empty">
      <div className="title">
        <h3>LỊCH SỬ ĐƠN HÀNG</h3>
      </div>
      <div className="image">
        <img
          src="https://www.lotteria.vn/grs-static/images/order-empty.png"
          alt=""
        />
      </div>
      <div className="text">
        <p>Bạn chưa có lịch sử đặt hàng</p>
      </div>
      <button className="btn-order" onClick={(e) => handleClick(e)}>
        Bắt đầu đặt hàng
      </button>
    </div>
  );
};

export default Empty;
