import Banner from "../MainHome/Banner/Banner";
import DishContainer from "./DishContainer/DishContainer";

const MainContainer = () => {
  return (
    <main className="main">
      <div className="wrapper">
        <Banner discount={"100"} link={"#"} />
        <DishContainer />
      </div>
    </main>
  );
};

export default MainContainer;
