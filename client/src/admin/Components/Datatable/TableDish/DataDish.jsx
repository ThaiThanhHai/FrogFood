import Axios from "axios";
import { DeleteOutline, Edit } from "@mui/icons-material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCreateAt } from "../../../Helper/baseFunction";
import "./dataDish.css";

const DataDish = ({ Dishes, setId, setIsShow }) => {
  toast.configure();

  const handleDelete = async (id) => {
    const url = "/api/dishes/delete/" + id;
    try {
      await Axios.delete(url, { _id: id });
      toast.success("Xóa thành công");
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
              <span>Tên món ăn</span>
            </th>
            <th>
              <span>Link ảnh</span>
            </th>
            <th>
              <span>Giá</span>
            </th>

            <th>
              <span>Thời gian tạo</span>
            </th>
            <th colSpan="2">
              <span>Thao tác</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {Dishes.map((item, index) => (
            <tr key={index}>
              <td>
                <span>{index + 1}</span>
              </td>
              <td>
                <img src={item.image} alt="" className="itemImage" />
                <span>{item.name}</span>
              </td>
              <td>
                <textarea defaultValue={item.image}></textarea>
              </td>
              <td>
                <span>{item.price}</span>
              </td>

              <td>
                <span>{getCreateAt(item.createdAt)}</span>
              </td>
              <td>
                <div className="btn">
                  <button
                    className="btn-update"
                    onClick={() => {
                      setIsShow(true);
                      setId(item._id);
                    }}
                  >
                    <Edit />
                  </button>
                  <button
                    className="btn-delete"
                    onClick={() => {
                      window.confirm(`Bạn có chắc chắn xóa ${item.name}? `) &&
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

export default DataDish;
