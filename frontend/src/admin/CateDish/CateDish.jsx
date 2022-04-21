import { useState, useEffect } from "react";
import axios from "axios";
import BtnAdd from "../Components/BtnAdd/BtnAdd";
import Datatable from "../Components/Datatable/Datatable";
import ModalAdd from "../Components/Modal/ModalAdd";
import Title from "../Components/Title/Title";
import "./cateDish.css";
import ModalUpdate from "../Components/Modal/ModalUpdate";

const CateDish = () => {
  const [isShowUpdate, setIsShowUpdate] = useState(false);
  const [isShowAdd, setIsShowAdd] = useState(false);
  const [cats, setCats] = useState([]);
  const [id, setId] = useState("");

  useEffect(() => {
    const handleRead = async () => {
      try {
        const res = await axios.get("/api/categories");
        setCats(res.data);
        // console.log(cats);
      } catch (err) {
        console.log(err);
      }
    };
    handleRead();
  }, [cats]);

  // console.log(cats);
  return (
    <div className="cateDish">
      <div className="cateDishContainer">
        <Title title="Danh sách loại món ăn" />
        <BtnAdd setIsShow={setIsShowAdd} />
        <Datatable Cats={cats} setId={setId} setIsShow={setIsShowUpdate} />
        {isShowAdd && <ModalAdd setIsShow={setIsShowAdd} />}
        {isShowUpdate && (
          <ModalUpdate Cats={cats} idUpdate={id} setIsShow={setIsShowUpdate} />
        )}
      </div>
    </div>
  );
};

export default CateDish;
