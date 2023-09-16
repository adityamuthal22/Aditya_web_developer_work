import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { isAuth } = useSelector((state) => state.auth.data);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (isAuth) {
    } else {
      navigate("/login");
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        // border: "1px solid",
        padding: "30px",
      }}
    >
      <div data-cy="navbar-home-link" onClick={() => navigate("/")}>
        <img
          src="/Adidas_Logo.png"
          width="60px"
          alt="logo"
          style={{ display: "block" }}
        />
      </div>

      <div>
        {/* Link button to /login page, if the user is not authenticated, else don't show it*/}
        <button
          data-cy="navbar-login-button"
          style={isAuth ? { display: "none" } : { display: "block" }}
          onClick={handleLogin}
        >
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default Navbar;
