import "./viewDetail.css";

const ViewDetail = ({ carts, id, setIsViewDetail }) => {
  let cart = carts.filter((item) => item._id === id);
  //   console.log(id);
  //   console.log(cart);
  const Total = (items) => {
    let sum = 0;
    items.map((item) => {
      sum = sum + item.quantity * item.price;
    });
    return sum;
  };
  return (
    <div className="ViewDetail">
      <div className="viewDetail-Container">
        <div className="btn-exit" onClick={() => setIsViewDetail(false)}>
          <span>X</span>
        </div>
        <div className="title">Chi tiết đơn hàng</div>
        <div className="content">
          <div className="info-customer">
            <div className="text">
              <span>Tên khách hàng:</span>
              <span>{cart[0].customer}</span>
            </div>
            <div className="text">
              <span>Số điện thoại:</span>
              <span>{cart[0].phone}</span>
            </div>
            <div className="text">
              <span>Email:</span>
              <span>{cart[0].email}</span>
            </div>
            <div className="text">
              <span>Địa chỉ giao hàng:</span>
              <span>{cart[0].address}</span>
            </div>
            <div className="text">
              <span>Ghi chú:</span>
              <span>{cart[0].note}</span>
            </div>
          </div>
          <div className="myCart">
            <div className="cartContent">
              {cart[0].dishes.map((item, index) => (
                <div className="item" key={index}>
                  <div className="image">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="name">
                    <span>{item.name}</span>
                  </div>
                  <div className="quantity">
                    <span>{item.quantity}</span>
                  </div>
                  <div className="price">
                    <span>{item.price}đ</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="total">
              <span>Tổng cộng</span>
              <span>{Total(cart[0].dishes)}đ</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetail;
