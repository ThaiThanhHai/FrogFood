import { Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import Databoard from "../Databoard/Databoard";
import List from "../Users/Users";
import CateDish from "../CateDish/CateDish";
import Dishes from "../Dishes/Dishes";
import Orders from "../Orders/Orders";
import Statistic from "../Statistic/Statistic";
import LogOrder from "../LogOrder/LogOrder";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <Routes>
          <Route path="/" element={<Databoard />} />
          <Route path="/databoard" element={<Databoard />} />
          <Route path="/users" element={<List />} />
          <Route path="/categories" element={<CateDish />} />
          <Route path="/dishes" element={<Dishes />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/statistic" element={<Statistic />} />
          <Route path="/logorder" element={<LogOrder />} />
        </Routes>
      </div>
    </div>
  );
};

export default Home;
