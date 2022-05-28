import { splitDay, unique, getCreateAt } from "../../../Helper/baseFunction";
import { useState, useEffect } from "react";
import "./tableStatistic.css";
import { Preview } from "@mui/icons-material";

const TableStatistic = ({ days, carts }) => {
  const Date = unique(splitDay(days));

  const sum = (arr) => {
    let s = 0;
    for (let i = 0; i < arr.length; i++) {
      s += arr[i].quantity * arr[i].price;
    }
    return s;
  };

  const maxOrder = (arr) => {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
      let s = sum(arr[i].dishes);
      if (s > max) max = s;
    }
    return max;
  };

  const minOrder = (arr) => {
    let min = 99999999999;
    for (let i = 0; i < arr.length; i++) {
      let s = sum(arr[i].dishes);
      if (s < min) min = s;
    }
    return min;
  };

  const Total = (arr) => {
    let s = 0;
    for (let i = 0; i < arr.length; i++) {
      s = s + sum(arr[i].dishes);
    }
    return s;
  };

  if (carts.length !== 0) {
    // console.log(getCreateAt(carts[0].createdAt) === Date[0]);
    const staCart = carts.filter(
      (item) => getCreateAt(item.createdAt) === Date[0]
    );
    console.log(staCart);
    console.log("So dong hang: ", staCart.length);
    console.log("Tong doanh thu: ", Total(staCart));
    console.log("Don hang lon nhat: ", maxOrder(staCart));
    console.log("Don hang nho nhat: ", minOrder(staCart));
  }
  // console.log(Date[0]);

  const filterCart = (cart, day) => {
    let staCart = [];
    if (carts.length !== 0) {
      staCart = cart.filter(
        (item) => getCreateAt(item.createdAt) === day && item.status === "ok"
      );
    }
    return staCart;
  };

  return (
    <div className="tableWrap w-90">
      <table>
        <thead>
          <tr>
            <th className="w-5">
              <span>STT</span>
            </th>
            <th className="w-18">
              <span>Ngày </span>
            </th>
            <th className="w-18">
              <span>Số đơn hàng</span>
            </th>
            <th className="w-18">
              <span>Đơn hàng cao nhất</span>
            </th>
            <th className="w-18">
              <span>Đơn hàng thấp nhất</span>
            </th>
            <th className="w-18">
              <span>Tổng doanh thu</span>
            </th>
          </tr>
        </thead>

        <tbody>
          {Date &&
            Date.map((item, index) => {
              return filterCart(carts, item).length !== 0 ? (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item}</td>
                  <td>{filterCart(carts, item).length}</td>
                  <td>{maxOrder(filterCart(carts, item))}</td>
                  <td>{minOrder(filterCart(carts, item))}</td>
                  <td>{Total(filterCart(carts, item))}</td>
                </tr>
              ) : null;
            })}
        </tbody>
      </table>
    </div>
  );
};

export default TableStatistic;
