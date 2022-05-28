import { useState, useEffect } from "react";
import Axios from "axios";
import Empty from "./Empty/Empty";
import "./history.css";

const Cats = [
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/food-delivery-93acd.appspot.com/o/categories%2Fhamburger.png?alt=media&token=beed6992-8b68-4b40-83cc-3f447964355f",
    name: "Hamburger",
    quantity: "1",
    price: "60000",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/food-delivery-93acd.appspot.com/o/categories%2Fhamburger.png?alt=media&token=beed6992-8b68-4b40-83cc-3f447964355f",
    name: "Hamburger",
    quantity: "1",
    price: "60000",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/food-delivery-93acd.appspot.com/o/categories%2Fhamburger.png?alt=media&token=beed6992-8b68-4b40-83cc-3f447964355f",
    name: "Hamburger",
    quantity: "1",
    price: "60000",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/food-delivery-93acd.appspot.com/o/categories%2Fhamburger.png?alt=media&token=beed6992-8b68-4b40-83cc-3f447964355f",
    name: "Hamburger",
    quantity: "1",
    price: "60000",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/food-delivery-93acd.appspot.com/o/categories%2Fhamburger.png?alt=media&token=beed6992-8b68-4b40-83cc-3f447964355f",
    name: "Hamburger",
    quantity: "1",
    price: "60000",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/food-delivery-93acd.appspot.com/o/categories%2Fhamburger.png?alt=media&token=beed6992-8b68-4b40-83cc-3f447964355f",
    name: "Hamburger",
    quantity: "1",
    price: "60000",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/food-delivery-93acd.appspot.com/o/categories%2Fhamburger.png?alt=media&token=beed6992-8b68-4b40-83cc-3f447964355f",
    name: "Hamburger",
    quantity: "1",
    price: "60000",
  },

  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/food-delivery-93acd.appspot.com/o/categories%2Fhamburger.png?alt=media&token=beed6992-8b68-4b40-83cc-3f447964355f",
    name: "Hamburger",
    quantity: "1",
    price: "60000",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/food-delivery-93acd.appspot.com/o/categories%2Fhamburger.png?alt=media&token=beed6992-8b68-4b40-83cc-3f447964355f",
    name: "Hamburger",
    quantity: "1",
    price: "60000",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/food-delivery-93acd.appspot.com/o/categories%2Fhamburger.png?alt=media&token=beed6992-8b68-4b40-83cc-3f447964355f",
    name: "Hamburger",
    quantity: "1",
    price: "60000",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/food-delivery-93acd.appspot.com/o/categories%2Fhamburger.png?alt=media&token=beed6992-8b68-4b40-83cc-3f447964355f",
    name: "Hamburger",
    quantity: "1",
    price: "60000",
  },
];

const History = () => {
  const currentUser = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getOrderCart = async () => {
      let url = "/api/cart/orders/" + currentUser.email;
      try {
        const res = await Axios.get(url);
        setCart(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getOrderCart();
  }, [cart, currentUser]);

  const currentCart = cart.filter((item) => item.status === "ok");

  return (
    <div className="history">
      <h3 className="title">Lịch sủ đơn hàng</h3>
      <div className="tableWrap tableHistory">
        <table>
          <tbody>
            {currentCart.map((item, index) =>
              item.dishes.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={item.image}
                      alt="Loại món ăn"
                      className="itemImage"
                    />
                  </td>
                  <td>
                    <span>{item.name}</span>
                  </td>
                  <td>
                    <span>{item.quantity}</span>
                  </td>
                  <td>
                    <span>{item.price}</span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;
