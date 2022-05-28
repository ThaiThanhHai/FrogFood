import { useState, useEffect } from "react";
import Axios from "axios";
import Title from "../Components/Title/Title";
import DataStatistic from "../Components/Datatable/TableStatistic/TableStatistic";
import Loader from "../Components/Loader/Loader";
import "./statistic.css";

const Statistic = () => {
  const [days, setDays] = useState([]);
  const [carts, setCarts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getCarts = async () => {
    try {
      const res = await Axios.get("/api/cart");
      setCarts(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getDay = async () => {
    try {
      const res = await Axios.get("/api/cart/day");
      setDays(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCarts();
    getDay();
  }, [days, carts]);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="statistic">
      <div className="statisticContainer">
        <Title title="Thống kê doanh thu theo ngày" />
        <DataStatistic days={days} carts={carts} />
      </div>
    </div>
  );
};

export default Statistic;
