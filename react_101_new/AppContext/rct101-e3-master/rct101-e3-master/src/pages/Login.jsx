import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [loginCreds, setLoginCreds] = useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  });

  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (loginCreds.email && loginCreds.password) {
      login(loginCreds.email, loginCreds.password);
    }
  };

  return (
    <div>
      {" "}
      Login
      <form onSubmit={handleSubmit}>
        <input data-cy="login-email" name="email" placeholder="Enter your email" onChange={handleChange} value={loginCreds.email} />
        <input data-cy="login-password" name="password" placeholder="Enter your password" onChange={handleChange} value={loginCreds.password}/>
        <button data-cy="login-submit" type="submit">Login</button> 
      </form>
    </div>
  );
};

export default Login;
