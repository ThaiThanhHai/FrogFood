import { useEffect, useState } from "react";
import Axios from "axios";
import Banner from "../MainHome/Banner/Banner";
import Loader from "../../admin/Components/Loader/Loader";
import DishContainer from "./DishContainer/DishContainer";

const MainContainer = () => {
  const [Cats, setCats] = useState([]);
  const [Dishes, setDishes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleGetCategory = async () => {
    const url = "/api/categories";
    try {
      const res = await Axios(url);
      setCats(res.data);
      setIsLoading(false);
    } catch (error) {
      // console.log(error);
    }
  };

  const handleGetDish = async () => {
    const url = "/api/dishes";
    try {
      const res = await Axios(url);
      setDishes(res.data);
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    handleGetCategory();
    handleGetDish();
    // console.log("Category: ", Cats);
  }, [Cats, Dishes]);

  return isLoading ? (
    <Loader />
  ) : (
    <main className="main">
      <div className="wrapper">
        <Banner discount={"100"} link={"#"} />
        <DishContainer Cats={Cats} Dishes={Dishes} />
      </div>
    </main>
  );
};

export default MainContainer;
