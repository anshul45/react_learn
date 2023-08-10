import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
const Title = () => (
  <Link to="/">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQFc7rUi0nyb4DN0uyR7jUOuiHbCW13TirRWGsmI66qA&s"
      alt="food_villa title"
      className="logo"
    />
  </Link>
);

const Header = () => {
  const on = useOnline;
  const [isLoggedin, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact"> Contact </Link>
          </li>
          <li>Cart</li>
          <li>
            <Link to="/instamart"> Instamart </Link>
          </li>
        </ul>
      </div>
      <h1>{on ? "ok" : "not ok"}</h1>
      {isLoggedin ? (
        <button onClick={() => setIsLoggedIn(!isLoggedin)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(!isLoggedin)}>Login</button>
      )}
    </div>
  );
};

export default Header;
