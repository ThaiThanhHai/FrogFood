import React from "react";
import History from "./History/History";
import Info from "./Info/Info";
import Notification from "./Notification/Notification";
import "./rightAccount.css";

const RightAccount = () => {
  return (
    <div className="account-right acc-history">
      <Notification />
    </div>
  );
};

export default RightAccount;
