import { useState, useEffect } from "react";
import Axios from "axios";
import BtnAdd from "../Components/BtnAdd/BtnAdd";
import DataCart from "../Components/Datatable/TableCart/DataCart";
import Title from "../Components/Title/Title";
import "./orders.css";
import ViewDetail from "../Components/ViewDetail/ViewDetail";

const Orders = () => {
  const [isShowUpdate, setIsShowUpdate] = useState(false);
  const [isShowAdd, setIsShowAdd] = useState(false);
  const [carts, setCarts] = useState([]);
  const [id, setId] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isViewDetail, setIsViewDetail] = useState(false);

  useEffect(() => {
    const handleRead = async () => {
      const url = "/api/cart";
      try {
        const res = await Axios.get(url);
        setCarts(res.data.reverse());
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    handleRead();
  }, [carts]);

  return (
    <div className="cateDish">
      <div className="cateDishContainer">
        <Title title="Danh sách loại món ăn" />
        <BtnAdd />
        <DataCart
          carts={carts}
          setIsViewDetail={setIsViewDetail}
          setId={setId}
        />
        {isViewDetail && (
          <ViewDetail carts={carts} id={id} setIsViewDetail={setIsViewDetail} />
        )}
        {/* {isShow && <ModalAdd setIsShow={setIsShowAdd} />} */}
        {/* {isShowUpdate && (
        <ModalUpdate Cats={cats} id={id} setIsShow={setIsShowUpdate} />
      )} */}
      </div>
    </div>
  );
};

export default Orders;
