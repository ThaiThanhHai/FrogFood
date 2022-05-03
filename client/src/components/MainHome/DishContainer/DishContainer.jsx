import Axios from "axios";
import { useEffect, useState } from "react";
import SubMenuContainer from "../SubMenuContainer/SubMenuContainer";
import MenuCard from "../MenuCard/MenuCard";
import ItemCard from "../ItemCard/ItemCard";
import "./dishContainer.css";

const DishContainer = ({ Cats, Dishes }) => {
  let mainData = Dishes.filter((element) => element.category === Cats[0].id);
  const [MainData, setMainData] = useState([]);

  useEffect(() => {
    const handleActiveCat = () => {
      const menuCard = document
        .querySelector(".rowContainer")
        .querySelectorAll(".rowMenuCard");

      function setMenuCardActive() {
        menuCard.forEach((n) => n.classList.remove("active"));
        this.classList.add("active");
      }

      menuCard.forEach((n) => n.addEventListener("click", setMenuCardActive));
    };
    handleActiveCat();
  });

  // set main dish items filter
  const setData = (id) => {
    setMainData(Dishes.filter((item) => item.category === id));
  };

  return (
    <div className="dishContainer">
      <div className="menuCard">
        <SubMenuContainer name={"Chúng tôi có bán"} />
      </div>
      <div className="rowContainer">
        {Cats &&
          Cats.map((data, index) => (
            <div key={data._id} onClick={() => setData(data.id)}>
              <MenuCard
                imgSrc={data.image}
                name={data.name}
                isActive={index === 0 ? true : false}
              />
            </div>
          ))}
      </div>
      <div className="dishitemContainer">
        {MainData.length === 0
          ? mainData.map((data) => (
              <ItemCard
                key={data.name}
                id={data._id}
                category={data.category}
                image={data.image}
                name={data.name}
                price={data.price}
                quantity={data.quantity}
              />
            ))
          : MainData.map((data) => (
              <ItemCard
                key={data.name}
                id={data._id}
                category={data.category}
                image={data.image}
                name={data.name}
                price={data.price}
                quantity={data.quantity}
              />
            ))}
      </div>
    </div>
  );
};

export default DishContainer;
