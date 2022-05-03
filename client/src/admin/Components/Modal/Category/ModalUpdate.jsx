import axios from "axios";
import { useState } from "react";
import { storage } from "../../../Helper/firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./modal.css";
import LoaderModal from "../../Loader/LoaderModal";

const ModalUpdate = ({ Cats, idUpdate, setIsShow }) => {
  let catUpdate = Cats.filter((item) => item._id === idUpdate);

  const [newName, setNewName] = useState(catUpdate[0].name);
  const [newId, setNewId] = useState(catUpdate[0].id);
  const [progresspercent, setProgresspercent] = useState(0);
  const [isUpdateComplete, setIsUpdateComplete] = useState(false);
  toast.configure();

  const handleUpdateCat = async (url, data, type) => {
    try {
      await axios.put(url, data, type);
      setIsUpdateComplete(false);
      setIsShow(false);
      toast.success("Cập nhật thành công");
    } catch (err) {
      console.log(err);
      toast.error("Có lỗi xảy ray, vui lòng thử lại!");
    }
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    setIsUpdateComplete(true);
    const file = e.target[2]?.files[0];
    let url;
    let data;
    let type;
    if (file) {
      const storageRef = ref(storage, `/categories/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgresspercent(progress);
        },
        (error) => {
          alert(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            url = "/api/categories/update";

            data = JSON.stringify({
              _id: catUpdate[0]._id,
              id: newId,
              name: newName,
              image: downloadURL,
            });

            type = {
              headers: { "Content-Type": "application/json" },
            };
            // Call API
            handleUpdateCat(url, data, type);
            console.log(progresspercent);
          });
        }
      );
    } else {
      url = "/api/categories/update";
      data = JSON.stringify({
        _id: catUpdate[0]._id,
        id: newId,
        name: newName,
        image: catUpdate[0].image,
      });
      type = {
        headers: { "Content-Type": "application/json" },
      };
      // Call API
      handleUpdateCat(url, data, type);
    }
  };
  return isUpdateComplete ? (
    <LoaderModal />
  ) : (
    <div className="modal">
      <div className="modal-content">
        <div className="btn-exit" onClick={() => setIsShow(false)}>
          <span>X</span>
        </div>
        <h1 className="modal-title">Cập nhật loại món ắn</h1>
        <form method="post" onSubmit={(e) => handleUpdateSubmit(e)}>
          {/* Input[text] item id */}
          <label htmlFor="name">ID</label>

          <input
            type="text"
            name="id"
            id="id"
            value={newId}
            onChange={(e) => setNewId(e.target.value)}
          />
          {/* Input[text] tên món ăn */}
          <label htmlFor="name">Tên món</label>
          <input
            type="text"
            name="name"
            id="name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
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

export default ModalUpdate;
