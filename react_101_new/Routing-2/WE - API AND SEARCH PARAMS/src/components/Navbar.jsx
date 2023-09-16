import { Link, NavLink } from "react-router-dom";
import Home from "../Routes/Home";

const links = [
  {
    to: "/Home",
    title: "Home"
  },
  {
    to: "/About",
    title: "About"
  },
  {
    to: "/Contact",
    title: "Contact"
  },
  {
    to: "/Users",
    title: "Users"
  },
  {
    to: "/Login",
    title: "Login"
  }
];

const baseStyle = {
  color: "black",
  textDecoration: "none"
};
const activeStyle = {
  textDecoration: "none",
  color: "teal"
};

export default function Navbar() {
  return (
    <div style={{ display: "flex", gap: "2rem", justifyContent: "center" }}>
      {links.map((item) => (
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
          to={item.to}
          key={item.to}
        >
          {item.title}
        </NavLink>
      ))}
    </div>
  );
}
