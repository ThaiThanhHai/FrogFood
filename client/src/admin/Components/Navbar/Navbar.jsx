import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper-navbar">
        <div className="search">
          <input type="text" placeholder="Tìm kiếm..." />
          <SearchOutlinedIcon className="icon-search" />
        </div>
        <div className="user">
          <h1 className="name">Thái Thanh Hải</h1>
          <img
            src="https://freeiconshop.com/wp-content/uploads/edd/person-outline-filled.png"
            alt=""
            className="avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
