import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

function Login() {
  const [formlogin, setFormLogin] = useState({
    email: "",
    password: ""
  });

  const auth = useContext(AppContext);
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormLogin({
      ...formlogin,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formlogin)
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        auth.handleLogin(res.token);
        navigate("/dashboard");
      })
      .catch((err) => {});
  }

  return (
    <div>
      <form data-testid="login-form" onSubmit={handleSubmit}>
        <div>
          <label>
            Email
            <input
              name="email"
              data-testid="email-input"
              type="email"
              placeholder="email"
              value={formlogin.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              value={formlogin.password}
              onChange={handleChange}
              data-testid="password-input"
              name="password"
              type="password"
              placeholder="password"
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/Dashboard">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;
