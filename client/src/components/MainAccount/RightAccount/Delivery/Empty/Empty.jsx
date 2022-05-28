import "./empty.css";

const Empty = () => {
  return (
    <div className="empty">
      <div className="title">
        <h3>Đơn hàng trống</h3>
      </div>
      <div className="image">
        <img
          src="https://www.lotteria.vn/grs-static/images/notification-empty.png"
          alt=""
        />
      </div>
      <div className="text">
        <p>Hiện tại bạn chưa có đơn hàng nào cả!</p>
      </div>
    </div>
  );
};

export default Empty;
