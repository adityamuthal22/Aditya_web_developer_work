import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";

const Navbar = () => {
  const {isAuth, logout} = useContext(AuthContext);
  const {cartItemsCount} = useContext(CartContext);

  const navigate = useNavigate();
  const handleLoginClick = () => {
    if(isAuth) {
      logout();
    } else {
      navigate("/login");
    }
  }
  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link" to="/">Logo</Link>
      <span data-cy="navbar-cart-items-count">Count : {cartItemsCount && `$(cartItemsCount)`}</span>
      <button data-cy="navbar-login-logout-button" onClick={handleLoginClick}>{isAuth ? "Logout" : "Login"}</button>
    </div>
  );
};

export default Navbar;
