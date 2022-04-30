import React from "react";
import { DeleteOutline, Edit, LockClockOutlined } from "@mui/icons-material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCreateAt } from "../../../Helper/baseFunction";
import Axios from "axios";
import "./dataUser.css";

const DataUser = ({ Users, setId, setIsShow, setChangePass }) => {
  const handleDelete = async (id) => {
    const url = "/api/users/delete/" + id;
    try {
      await Axios.delete(url, { _id: id });
      toast.success("Xóa tài khoản thành công");
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
              <span>Tên tài khoản</span>
            </th>
            <th>
              <span>Email</span>
            </th>
            <th>
              <span>Thời gian tạo</span>
            </th>
            <th>
              <span>Quyền</span>
            </th>

            <th colSpan="3">
              <span>Thao tác</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {Users.map((item, index) => (
            <tr key={index}>
              <td>
                <span>{index + 1}</span>
              </td>
              <td>
                <img src={item.image} alt="" className="itemImage" />
                <span>{item.username}</span>
              </td>
              <td style={{ textAlign: "left" }}>
                <span>{item.email}</span>
              </td>
              <td>
                <span>{getCreateAt(item.createdAt)}</span>
              </td>
              <td>
                {item.isAdmin ? (
                  <span id="admin">Admin</span>
                ) : (
                  <span id="user">User</span>
                )}
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
                      window.confirm(
                        `Bạn có chắc chắn xóa tài khoản ${item.username}? `
                      ) && handleDelete(item._id);
                    }}
                  >
                    <DeleteOutline />
                  </button>
                  <button
                    className="btn-changePassword"
                    onClick={() => {
                      setChangePass(true);
                      setId(item._id);
                    }}
                  >
                    <LockClockOutlined />
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

export default DataUser;
