import "./question.css";

const Question = () => {
  return (
    <div className="question">
      <div className="r-title">Hỏi & Đáp</div>
      <div className="q-content">
        <div className="q-info">
          <h3>VIETNAM FROGFOOD CO.LTD</h3>
          <address>
            <div className="text">
              <h4>Địa chỉ:</h4>
              <span>
                158, Hẻm liên tổ 12-20, Nguyễn Văn Cừ, An Khánh, Ninh Kiều, Cần
                Thơ
              </span>
            </div>
            <div className="text">
              <h4>Điện thoại:</h4>
              <span>(84-8) 5416 1072 79</span>
            </div>
            <div className="text">
              <h4>Fax:</h4>
              <span>(84-8) 5416 1080 81</span>
            </div>
            <div className="text">
              <h4>Email:</h4>
              <span>marketing@frogfood.vn</span>
            </div>
          </address>
        </div>
        <div className="q-form">
          <div className="q-title">
            <h4>Phản hồi từ bạn</h4>
          </div>
          <p className="q-note">
            Vui lòng chọn chủ đề môt tả lý do bạn liên hệ với chúng tôi
          </p>
          <div className="form-group">
            <select name="question_id">
              <option value="1">Chính sách giao nhận</option>
              <option value="2">Chính sách phục vụ</option>
              <option value="3">Đặt hàng online qua số điện thoại</option>
              <option value="4">Đặt hàng qua app</option>
              <option value="5">Sử dụng mã giảm giá</option>
            </select>
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              name="note"
              placeholder="Vui lòng viết những lời góp ý hoặc những câu hỏi của bạn tại đây"
            ></textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="btn-send">
              Gửi ngay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
