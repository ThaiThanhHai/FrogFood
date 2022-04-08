import { ArrowBackRounded } from "@mui/icons-material";
import Empty from "./Empty/Empty";
import "./notification.css";

const Notification = () => {
  return (
    <div className="notification">
      <button className="btn-back">
        <ArrowBackRounded />
      </button>
      <Empty />
    </div>
  );
};

export default Notification;
