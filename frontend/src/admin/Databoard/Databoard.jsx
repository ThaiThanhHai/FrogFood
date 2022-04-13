import Widget from "../Components/Widget/Widget";
import Chart from "../Components/Chart/Chart";
import "./databoard.css";

const Databoard = () => {
  return (
    <>
      <div className="widgets">
        <Widget type="user" />
        <Widget type="order" />
        <Widget type="earning" />
        <Widget type="balance" />
      </div>
      <div className="charts">
        <Chart />
      </div>
    </>
  );
};

export default Databoard;
