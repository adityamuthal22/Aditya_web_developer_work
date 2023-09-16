import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAPI } from "../Redux/AuthReducer/action";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const [email, setemail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("");
  // const { isAuth } = useSelector((state) => state.auth.data);
  const { isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const commingFrom = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("InLogin");
    if (email && password) {
      dispatch(loginAPI({ email, password })).then(() => {
        navigate(commingFrom, { replace: true });
      });
    }
  };

  return (
    <div
      style={{
        // border: "1px solid",
        width: "50%",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <h2>LOGIN</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>User Email</label>
          <br />
          <input
            data-cy="login-email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div>
          <label>User Password</label>
          <br />
          <input
            data-cy="login-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          data-cy="login-submit"
          style={{
            padding: "5px 20px",
            backgroundColor: "black",
            color: "white",
            borderRadius: "5px",
          }}
        >
          {isLoading ? "Loading" : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
