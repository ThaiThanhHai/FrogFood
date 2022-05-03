import Axios from "axios";
import { useState } from "react";
import { storage } from "../../../Helper/firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./modalUser.css";
import LoaderModal from "../../Loader/LoaderModal";
const imgDefault =
  "https://firebasestorage.googleapis.com/v0/b/food-delivery-93acd.appspot.com/o/users%2Fuser.png?alt=media&token=34d87ba7-0c53-4334-822a-ffc68ee0fcdf";

const ModalAdd = ({ setIsShow, setIsLoading }) => {
  toast.configure();

  const [dataUser, setDataUser] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
    isAdmin: false,
  });
  const [isComplete, setIsComplete] = useState(false);

  const handleChange = ({ currentTarget: input }) => {
    setDataUser({ ...dataUser, [input.name]: input.value });
  };

  const handleRegisterAPI = async (url, data, type) => {
    try {
      await Axios.post(url, data, type);
      setIsComplete(false);
      setIsShow(false);
      toast.success("Tạo tài khoản thành công");
    } catch (err) {
      console.log(err);
      setIsComplete(false);
      toast.error("Tài khoản đã tồn tại!");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsComplete(true);

    if (dataUser.password !== dataUser.repeatPassword) {
      setIsComplete(false);
      return toast.error("Mật khẩu không trùng khớp!");
    }

    const img = e.target[4]?.files[0];
    let data = {};
    let url = "/api/users/register";
    let type = {
      headers: { "Content-Type": "application/json" },
    };
    if (!img) {
      // console.log("No image!");
      data = JSON.stringify({
        username: dataUser.username,
        email: dataUser.email,
        password: dataUser.password,
        image: imgDefault,
        isAdmin: false,
      });
      // Call API
      handleRegisterAPI(url, data, type);
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
              username: dataUser.username,
              email: dataUser.email,
              password: dataUser.password,
              image: downloadURL,
              isAdmin: false,
            });
            // Call API
            handleRegisterAPI(url, data, type);
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
          <input type="text" name="username" onChange={handleChange} required />

          <label htmlFor="email">Email</label>
          <input type="email" name="email" onChange={handleChange} required />

          <label htmlFor="password">Mật khẩu</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            required
          />

          <label htmlFor="repeatPassword">Nhập lại mật khẩu</label>
          <input
            type="password"
            name="repeatPassword"
            onChange={handleChange}
          />

          <label htmlFor="image">Hình ảnh</label>
          <input style={{ border: "none" }} type="file" name="image" />

          <div className="setPrivilege">
            <span>Thiết lập quyền</span>
            <select
              name="isAdmin"
              id=""
              className="classic"
              onChange={handleChange}
            >
              <option value="false">Người dùng</option>
              <option value="true">Quản trị</option>
            </select>
          </div>

          <button type="submit">Thêm</button>
        </form>
      </div>
    </div>
  );
};

export default ModalAdd;
