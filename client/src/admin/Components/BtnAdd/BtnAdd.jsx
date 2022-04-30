import "./btnAdd.css";
import { AddRounded } from "@mui/icons-material";

const BtnAdd = ({ setIsShow }) => {
  return (
    <div className="btnAdd" onClick={() => setIsShow(true)}>
      <AddRounded />
      <span>Thêm</span>
    </div>
  );
};

export default BtnAdd;
