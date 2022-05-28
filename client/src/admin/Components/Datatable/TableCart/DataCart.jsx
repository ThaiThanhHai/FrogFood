import Axios from "axios";
import { DeleteOutline, Edit, Preview } from "@mui/icons-material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCreateAt } from "../../../Helper/baseFunction";
import "./dataCart.css";

const DataCart = ({ carts, setId, setIsShow, setIsViewDetail }) => {
  toast.configure();
  const handleDelete = async (id) => {
    const url = "/api/categories/delete/" + id;
    try {
      await Axios.delete(url, { _id: id });
      toast.success("Xóa thành công");
    } catch (err) {
      toast.error("Có lỗi xảy ray, vui lòng thử lại!");
    }
  };

  const handleConfirmation = async (id) => {
    const url = "/api/cart/confirm";
    try {
      await Axios.put(url, { _id: id });
      toast.success("Xác nhận đơn hàng thành công");
    } catch (err) {
      toast.error("Có lỗi xảy ray, vui lòng thử lại!");
    }
  };

  const hanldeSuccesDelivery = async (id) => {
    const url = "/api/cart/delivery";
    try {
      await Axios.put(url, { _id: id });
      toast.success("Đơn hàng đã giao thành công");
    } catch (err) {
      toast.error("Có lỗi xảy ray, vui lòng thử lại!");
    }
  };

  return (
    <div className="tableWrap">
      <table>
        <thead>
          <tr>
            <th>
              <span>STT</span>
            </th>
            <th>
              <span>Tên khách hàng</span>
            </th>
            <th>
              <span>Địa chỉ</span>
            </th>
            <th>
              <span>Trạng thái</span>
            </th>
            <th>
              <span>Xem chi tiết</span>
            </th>
            <th colSpan="2">
              <span>Hủy đơn</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {carts.map((item, index) => (
            <tr key={index}>
              <td>
                <span>{index + 1}</span>
              </td>
              <td>
                <span>{item.customer}</span>
              </td>
              <td>
                <textarea defaultValue={item.address}></textarea>
              </td>
              <td>
                {item.status === "delivery" ? (
                  <div className="btn">
                    <button
                      className="btn-delivery"
                      onClick={() => {
                        window.confirm(
                          `Đơn hàng của ${item.customer} đã giao thành công? `
                        ) && hanldeSuccesDelivery(item._id);
                      }}
                    >
                      Đang giao hàng
                    </button>
                  </div>
                ) : item.status === "ok" ? (
                  <div className="btn">
                    <button className="btn-ok">Đã giao</button>
                  </div>
                ) : (
                  <div className="btn">
                    <button
                      className="btn-confirm"
                      onClick={() => {
                        window.confirm(
                          `Bạn có muốn xác nhận đơn hàng của ${item.customer}? `
                        ) && handleConfirmation(item._id);
                      }}
                    >
                      Xác nhận
                    </button>
                  </div>
                )}
              </td>
              <td>
                <div className="btn">
                  <button
                    className="btn-update"
                    onClick={() => {
                      setIsViewDetail(true);
                      setId(item._id);
                    }}
                  >
                    <Preview />
                  </button>
                </div>
              </td>
              <td>
                <div className="btn">
                  <button
                    className="btn-delete"
                    onClick={() => {
                      window.confirm(`Bạn có chắc chắn hủy đơn hàng này ?`) &&
                        handleDelete(item._id);
                    }}
                  >
                    <DeleteOutline />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataCart;
