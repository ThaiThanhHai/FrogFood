import React from "react";
import imgLoader from "../../../assets/loader.gif";
import "./loaderModal.css";

const LoaderModal = () => {
  return (
    <div className="loaderModal">
      <img src={imgLoader} alt="" />
    </div>
  );
};

export default LoaderModal;
