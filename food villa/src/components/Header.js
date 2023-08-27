import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
const Title = () => (
  <Link to="/">
    <img
      className="h-28 p-2"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQFc7rUi0nyb4DN0uyR7jUOuiHbCW13TirRWGsmI66qA&s"
      alt="food_villa title"
    />
  </Link>
);

const Header = () => {
  const on = useOnline;
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const { user } = useContext(UserContext);
  return (
    <div className="flex justify-between items-center bg-pink-50 shadow-lg px-5">
      <Title />
      <div>
        <ul className="flex ">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            <Link to="/contact"> Contact </Link>
          </li>
          <li className="px-2">Cart</li>
          <li className="px-2">
            <Link to="/instamart"> Instamart </Link>
          </li>
        </ul>
      </div>
      <h1>{on ? "ok" : "not ok"}</h1>
      <h1 className="p-10 font-bold text-red-700">{user.name}</h1>
      {isLoggedin ? (
        <button onClick={() => setIsLoggedIn(!isLoggedin)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(!isLoggedin)}>Login</button>
      )}
    </div>
  );
};

export default Header;
