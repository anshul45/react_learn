import { useState } from "react";
const Title = () => (
  <a href="/">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQFc7rUi0nyb4DN0uyR7jUOuiHbCW13TirRWGsmI66qA&s"
      alt="food_villa title"
      className="logo"
    />
  </a>
);

const Header = () => {
  const [isLoggedin, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedin ? (
        <button onClick={() => setIsLoggedIn(!isLoggedin)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(!isLoggedin)}>Login</button>
      )}
    </div>
  );
};

export default Header;
