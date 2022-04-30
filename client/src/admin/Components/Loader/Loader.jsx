import React from "react";
import imgLoader from "../../../assets/loader.gif";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <img src={imgLoader} alt="" />
    </div>
  );
};

export default Loader;
