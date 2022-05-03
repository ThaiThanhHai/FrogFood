import Axios from "axios";
import { useState, useEffect } from "react";
import BtnAdd from "../Components/BtnAdd/BtnAdd";
import DataDish from "../Components/Datatable/TableDish/DataDish";
import ModalAdd from "../Components/Modal/Dishes/ModalAdd";
import Title from "../Components/Title/Title";
import "./dishes.css";
import ModalUpdate from "../Components/Modal/Dishes/ModalUpdate";
import Loader from "../Components/Loader/Loader";

const Dishes = () => {
  const [isShowUpdate, setIsShowUpdate] = useState(false);
  const [isShowAdd, setIsShowAdd] = useState(false);
  const [dishes, setDishes] = useState([]);
  const [id, setId] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleRead = async () => {
      const url = "/api/dishes";
      try {
        const res = await Axios.get(url);
        setDishes(res.data.reverse());
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    handleRead();
  }, [dishes]);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="dishes">
      <div className="dishesContainer">
        <Title title="Danh sách món ăn" />
        <BtnAdd setIsShow={setIsShowAdd} />
        <DataDish Dishes={dishes} setId={setId} setIsShow={setIsShowUpdate} />
        {isShowAdd && <ModalAdd setIsShow={setIsShowAdd} />}
        {isShowUpdate && (
          <ModalUpdate
            Dishes={dishes}
            idUpdate={id}
            setIsShow={setIsShowUpdate}
          />
        )}
      </div>
    </div>
  );
};

export default Dishes;
