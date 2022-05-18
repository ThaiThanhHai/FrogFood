import LeftAccount from "./LeftAccount/LeftAccount";
import { Routes, Route } from "react-router-dom";
import Info from "./RightAccount/Info/Info";
import History from "./RightAccount/History/History";
import Delivery from "./RightAccount/Delivery/Delivery";
import "./mainAccount.css";
import Question from "./RightAccount/Question/Question";
import ChangePass from "./RightAccount/ChangePass/ChangePass";
import DelAccount from "./RightAccount/DelAccount/DelAccount";

const MainAccount = () => {
  return (
    <main className="main">
      <div className="wrapper">
        <form>
          <div className="accountContainer">
            <div className="my-account">
              <LeftAccount />
              <Routes>
                <Route path="/" element={<Info />} />
                <Route path="/info" element={<Info />} />
                <Route path="/history" element={<History />} />
                <Route path="/delivery" element={<Delivery />} />
                <Route path="/qna" element={<Question />} />
                <Route path="/change_password" element={<ChangePass />} />
                <Route path="/delete_account" element={<DelAccount />} />
              </Routes>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default MainAccount;
