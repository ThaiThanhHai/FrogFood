import { useState, useEffect } from "react";
import Axios from "axios";
import BtnAdd from "../Components/BtnAdd/BtnAdd";
import DataCat from "../Components/Datatable/TableCat/DataCat";
import ModalAdd from "../Components/Modal/Category/ModalAdd";
import Title from "../Components/Title/Title";
import "./cateDish.css";
import ModalUpdate from "../Components/Modal/Category/ModalUpdate";
import Loader from "../Components/Loader/Loader";

const CateDish = () => {
  const [isShowUpdate, setIsShowUpdate] = useState(false);
  const [isShowAdd, setIsShowAdd] = useState(false);
  const [cats, setCats] = useState([]);
  const [id, setId] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleRead = async () => {
      const url = "/api/categories";
      try {
        const res = await Axios.get(url);
        setCats(res.data.reverse());
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    handleRead();
  }, [cats]);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="cateDish">
      <div className="cateDishContainer">
        <Title title="Danh sách loại món ăn" />
        <BtnAdd setIsShow={setIsShowAdd} />
        <DataCat Cats={cats} setId={setId} setIsShow={setIsShowUpdate} />
        {isShowAdd && <ModalAdd setIsShow={setIsShowAdd} />}
        {isShowUpdate && (
          <ModalUpdate Cats={cats} idUpdate={id} setIsShow={setIsShowUpdate} />
        )}
      </div>
    </div>
  );
};

export default CateDish;
