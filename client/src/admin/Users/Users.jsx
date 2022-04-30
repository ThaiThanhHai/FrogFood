import { useState, useEffect } from "react";
import DataUser from "../Components/Datatable/TableUser/DataUser";
import BtnAdd from "../Components/BtnAdd/BtnAdd";
import Title from "../Components/Title/Title";
import ModalAdd from "../Components/Modal/User/ModalAdd";
import Axios from "axios";
import Loader from "../Components/Loader/Loader";
import ModalUpdate from "../Components/Modal/User/ModalUpdate";
import ChangePass from "../Components/Modal/User/ChangePass";
import "./users.css";

const Users = () => {
  const [isShowUpdate, setIsShowUpdate] = useState(false);
  const [isShowAdd, setIsShowAdd] = useState(false);
  const [isshowChangePass, setIsShowChangePass] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [id, setId] = useState("");
  useEffect(() => {
    const handleRead = async () => {
      const url = "/api/users";
      try {
        const res = await Axios.get(url);
        setUsers(res.data.reverse());
        setIsLoading(false);
        // console.log(cats);
      } catch (err) {
        console.log(err);
      }
    };
    handleRead();
  }, [users]);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="users">
      <div className="usersContainer">
        <Title title="Danh sách người dùng" />
        <BtnAdd setIsShow={setIsShowAdd} />
        <DataUser
          Users={users}
          setId={setId}
          setIsShow={setIsShowUpdate}
          setChangePass={setIsShowChangePass}
        />
        {isShowAdd && <ModalAdd setIsShow={setIsShowAdd} />}
        {isShowUpdate && (
          <ModalUpdate
            Users={users}
            idUpdate={id}
            setIsShow={setIsShowUpdate}
          />
        )}
        {isshowChangePass && (
          <ChangePass Users={users} id={id} setIsShow={setIsShowChangePass} />
        )}
      </div>
    </div>
  );
};

export default Users;
