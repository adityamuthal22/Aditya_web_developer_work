import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Login from "./Login";
import UserPage from "./UserPage";
import Users from "./Users";

export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/Users"
          element={
            <PrivateRoute>
              <Users />
            </PrivateRoute>
          }
        />
        <Route
          path="/users/:user_id"
          element={
            <PrivateRoute>
              <UserPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}
