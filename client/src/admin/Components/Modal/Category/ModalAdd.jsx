import axios from "axios";
import { useState } from "react";
import { storage } from "../../../Helper/firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./modal.css";
import LoaderModal from "../../Loader/LoaderModal";

const ModalAdd = ({ setIsShow, setIsLoading }) => {
  const [name, setName] = useState("");

  const [id, setId] = useState("");
  const [isAddComplete, setIsAddComplete] = useState(false);

  toast.configure();

  const handleAddToCategory = async (url, data, type) => {
    try {
      await axios.post(url, data, type);
      setIsAddComplete(false);
      setIsShow(false);
      toast.success("Thêm thành công");
    } catch (error) {
      setIsAddComplete(false);
      if (error.response.status === 409) {
        toast.error("Lỗi! Loại món ăn đã có trong CSDL");
      } else {
        toast.error("Có lỗi xảy ray, vui lòng thử lại!");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAddComplete(true);
    const file = e.target[2]?.files[0];
    if (!file) {
      toast.error("Lỗi! chưa upload ảnh loại món ăn");
      setIsAddComplete(false);
      return;
    }

    const storageRef = ref(storage, `/categories/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        console.log(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          let url = "/api/categories/create";
          let data = JSON.stringify({
            name: name,
            id: id,
            image: downloadURL,
          });

          let type = {
            headers: { "Content-Type": "application/json" },
          };
          // Axios
          handleAddToCategory(url, data, type);
        });
      }
    );
  };

  return isAddComplete ? (
    <LoaderModal />
  ) : (
    <div className="modal">
      <div className="modal-content">
        <div className="btn-exit" onClick={() => setIsShow(false)}>
          <span>X</span>
        </div>
        <h1 className="modal-title">Thêm loại món ắn</h1>

        <form method="post" onSubmit={(e) => handleSubmit(e)}>
          {/* Input[text] item id */}
          <label htmlFor="name">ID</label>
          <input
            type="text"
            name="id"
            id="id"
            placeholder="Vd: burger01"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          {/* Input[text] tên món ăn */}
          <label htmlFor="name">Tên món</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            placeholder="VD: Burger"
            onChange={(e) => setName(e.target.value)}
          />

          {/* Input[file] hình ảnh */}
          <label htmlFor="image">Hình ảnh</label>
          <input
            style={{ border: "none" }}
            type="file"
            name="image"
            id="image"
          />

          <button type="submit">Thêm</button>
        </form>
      </div>
    </div>
  );
};

export default ModalAdd;
