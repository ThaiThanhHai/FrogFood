import Main from "./Main";
import Navigation from "../components/Navigation/Navigation";
import Blog from "./Blog";
import Account from "./Account";
import Cart from "./Cart";
import HomeAdmin from "../admin/HomeAdmin/Home";
import { Routes, Route } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Routes>
        <Route index element={<Main />} />
        <Route path="dish" element={<Main />} />
        <Route path="cart/*" element={<Cart />} />
        <Route path="blog" element={<Blog />} />
        <Route path="account" element={<Account />} />
        <Route path="admin/*" element={<HomeAdmin />} />
      </Routes>

      <Navigation />
    </>
  );
};

export default Home;
