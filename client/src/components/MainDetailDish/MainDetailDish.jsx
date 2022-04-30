import React from "react";
import Detail from "./Detail/Detail";
import Related from "./Related/Related";

const MainDetailDish = () => {
  return (
    <main className="main">
      <div className="wrapper">
        <form>
          <div className="detailContainer">
            <Detail />
            <Related />
          </div>
        </form>
      </div>
    </main>
  );
};

export default MainDetailDish;
