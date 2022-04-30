import Axios from "axios";
import { useState } from "react";
import { storage } from "../../../Helper/firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./modalUser.css";
import LoaderModal from "../../Loader/LoaderModal";

const ModalUpdate = ({ Users, idUpdate, setIsShow }) => {
  toast.configure();

  let User = Users.filter((item) => item._id === idUpdate);

  const [username, setUsername] = useState(User[0].username);
  const [email, setEmail] = useState(User[0].email);
  const [isAdmin, setIsAdmin] = useState(User[0].isAdmin);
  const [isComplete, setIsComplete] = useState(false);

  const handleUpdateUser = async (url, data, type) => {
    try {
      await Axios.put(url, data, type);
      setIsComplete(false);
      toast.success("Cập nhật tài khoản thành công");
    } catch (err) {
      console.log(err);
      setIsComplete(false);
      toast.error("Tài khoản đã tồn tại!");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const img = e.target[2]?.files[0];
    setIsComplete(true);

    let data = {};
    let url = "/api/users/update";
    let type = {
      headers: { "Content-Type": "application/json" },
    };
    if (!img) {
      // console.log("No image!");
      data = JSON.stringify({
        id: idUpdate,
        username,
        email,
        isAdmin,
        image: User[0].image,
      });
      console.log(data);
      // Call API
      handleUpdateUser(url, data, type);
    } else {
      const storageRef = ref(storage, `/users/${img.name}`);
      const uploadTask = uploadBytesResumable(storageRef, img);

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
            let data = JSON.stringify({
              id: idUpdate,
              username,
              email,
              isAdmin,
              image: downloadURL,
            });
            console.log(data);
            // Call API
            handleUpdateUser(url, data, type);
          });
        }
      );
    }
  };

  return isComplete ? (
    <LoaderModal />
  ) : (
    <div className="modalUser">
      <div className="modal-contentUser">
        <div className="btn-exit" onClick={() => setIsShow(false)}>
          <span>X</span>
        </div>
        <h1 className="modal-title">Thêm loại món ắn</h1>

        <form method="post" onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="name">Tên tài khoản</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />

          <label htmlFor="image">Hình ảnh</label>
          <input style={{ border: "none" }} type="file" name="image" />

          <div className="setPrivilege">
            <span>Thiết lập quyền</span>
            {User[0].isAdmin ? (
              <select
                name="isAdmin"
                id=""
                className="classic"
                onChange={(e) => setIsAdmin(e.target.value)}
              >
                <option value="true">Quản trị</option>
                <option value="false">Người dùng</option>
              </select>
            ) : (
              <select
                name="isAdmin"
                id=""
                className="classic"
                onChange={(e) => setIsAdmin(e.target.value)}
              >
                <option value="false">Người dùng</option>
                <option value="true">Quản trị</option>
              </select>
            )}
          </div>

          <button type="submit">Cập nhật</button>
        </form>
      </div>
    </div>
  );
};

export default ModalUpdate;
