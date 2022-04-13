import "./empty.css";

const Empty = () => {
  return (
    <div className="empty">
      <div className="title">
        <h3>Thông báo</h3>
      </div>
      <div className="image">
        <img
          src="https://www.lotteria.vn/grs-static/images/notification-empty.png"
          alt=""
        />
      </div>
      <div className="text">
        <p>Hiện tại chưa có thông báo!</p>
      </div>
    </div>
  );
};

export default Empty;
