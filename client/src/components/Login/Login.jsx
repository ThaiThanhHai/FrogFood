import { useState } from "react";
import { storage } from "../../admin/Helper/firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import Loader from "../../admin/Components/Loader/Loader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/userSlice";
import Axios from "axios";
import "./login.css";
const imgDefault =
  "https://firebasestorage.googleapis.com/v0/b/food-delivery-93acd.appspot.com/o/users%2Fuser.png?alt=media&token=34d87ba7-0c53-4334-822a-ffc68ee0fcdf";
toast.configure();

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [dataRegister, setDataRegister] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });
  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });
  const [dispatchDataLogin, setDispatchDataLogin] = useState([
    {
      username: "",
      email: "",
      image: "",
      isAdmin: false,
      token: "",
      phone: "",
      address: "",
    },
  ]);
  const [isComplete, setIsComplete] = useState(false);
  const [isToggle, setIsToggle] = useState(true);

  const handleChangeRegister = ({ currentTarget: input }) => {
    setDataRegister({ ...dataRegister, [input.name]: input.value });
  };

  const handleChangeLogin = ({ currentTarget: input }) => {
    setDataLogin({ ...dataLogin, [input.name]: input.value });
  };

  const handleRegisterAPI = async (url, data, type) => {
    try {
      await Axios.post(url, data, type);
      setIsComplete(false);
      toast.success("Đăng ký tài khoản thành công");
    } catch (err) {
      console.log(err);
      setIsComplete(false);
      toast.error("Tài khoản đã tồn tại!");
    }
  };

  const handleLoginAPI = async (url, data, type) => {
    try {
      const res = await Axios.post(url, data, type);
      // console.log(res.data);
      setDispatchDataLogin(res.data);
      setIsComplete(false);
      navigate("/");
    } catch (error) {
      console.log(error);
      setIsComplete(false);
      toast.error("Email hoặc mật khẩu không hợp lệ!");
    }
  };

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    setIsComplete(true);

    if (dataRegister.password !== dataRegister.repeatPassword) {
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
        username: dataRegister.username,
        email: dataRegister.email,
        password: dataRegister.password,
        image: imgDefault,
        phone: "",
        address: "",
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
              username: dataRegister.username,
              email: dataRegister.email,
              password: dataRegister.password,
              image: downloadURL,
              phone: "",
              address: "",
              isAdmin: false,
            });
            // Call API
            handleRegisterAPI(url, data, type);
          });
        }
      );
    }
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    setIsComplete(true);
    let url = "/api/users/login";
    let data = JSON.stringify({
      email: dataLogin.email,
      password: dataLogin.password,
    });
    let type = {
      headers: { "Content-Type": "application/json" },
    };

    handleLoginAPI(url, data, type);
  };
  dispatch(login(dispatchDataLogin));
  return (
    <div className="wrapper-login">
      {isComplete ? <Loader /> : null}
      <div
        className={
          isToggle ? "container-login" : "container-login right-panel-active"
        }
      >
        <div className="sign-up-container">
          <form
            method="POST"
            id="Form-Register"
            onSubmit={(e) => handleSubmitRegister(e)}
          >
            <h1>Đăng ký tạo tài khoản</h1>
            <input
              type="text"
              name="username"
              required
              onChange={handleChangeRegister}
              placeholder="Họ tên"
            />
            <input
              type="email"
              name="email"
              required
              onChange={handleChangeRegister}
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              required
              onChange={handleChangeRegister}
              placeholder="Mật khẩu"
            />
            <input
              type="password"
              name="repeatPassword"
              required
              onChange={handleChangeRegister}
              placeholder="Nhập lại mật khẩu"
            />
            <input type="file" id="inputFile" name="image" />

            <button className="form-btn" name="signup">
              Đăng ký
            </button>
          </form>
        </div>

        <div className="sign-in-container">
          <form method="POST" id="Form-Login" onSubmit={handleSubmitLogin}>
            <h1>Đăng nhập</h1>
            <input
              type="email"
              name="email"
              required
              onChange={handleChangeLogin}
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              required
              onChange={handleChangeLogin}
              placeholder="Mật khẩu"
            />
            <button name="login" className="form-btn">
              Đăng nhập
            </button>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overley-left">
            <h3>Frog Food</h3>
            <p>Để giao hành tận nơi, vui lòng đăng nhập tài khoản</p>
            <button
              id="SignIn"
              name="login"
              className="overlay_btn"
              onClick={() => setIsToggle(true)}
            >
              Đăng nhập
            </button>
          </div>
          <div className="overlay-right">
            <h3> Đăng ký tạo tài khoản</h3>
            <p>FrogFood đặt nhanh, giao nhanh, thanh toán dễ dàng</p>
            <button
              id="SignUp"
              className="overlay_btn"
              onClick={() => setIsToggle(false)}
            >
              Đăng ký
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
