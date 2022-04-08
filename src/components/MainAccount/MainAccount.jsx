import LeftAccount from "./LeftAccount/LeftAccount";
import RightAccount from "./RightAccount/RightAccount";
import "./mainAccount.css";

const MainAccount = () => {
  return (
    <main className="main">
      <div className="wrapper">
        <form>
          <div className="accountContainer">
            <div className="my-account">
              <LeftAccount />
              <RightAccount />
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default MainAccount;
