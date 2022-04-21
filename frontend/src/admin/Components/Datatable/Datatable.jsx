import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { DeleteOutline, Edit } from "@mui/icons-material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./datatable.css";

const Datatable = ({ Cats, setId, setIsShow }) => {
  toast.configure();

  const handleDelete = async (id) => {
    const url = "/api/categories/delete/" + id;
    try {
      await axios.delete(url, { _id: id });
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
              <span>Tên loại món ăn</span>
            </th>
            <th>
              <span>Link ảnh</span>
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
          {Cats.map((item, index) => (
            <tr key={index}>
              <td>
                <span>{index + 1}</span>
              </td>
              <td>
                <span>{item.name}</span>
              </td>
              <td>
                <textarea defaultValue={item.image}></textarea>
              </td>
              <td>
                <span>02-03-2000</span>
              </td>
              <td className="btn">
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Datatable;
