import "./App.css";
import Home from "./pages/Home";
import Dish from "./pages/Dish";
import Blog from "./pages/Blog";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import HomeAdmin from "./admin/HomeAdmin/Home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="dish" element={<Dish />} />
        <Route path="cart" element={<Cart />} />
        <Route path="blog" element={<Blog />} />
        <Route path="account" element={<Account />} />
        <Route path="admin/*" element={<HomeAdmin />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <Navigation />
    </div>
  );
}

export default App;
