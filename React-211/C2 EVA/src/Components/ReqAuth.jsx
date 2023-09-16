import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
//Create the HOC for protected Routes
const ReqAuth = ({ children }) => {
  const { isAuth } = useSelector((state) => state.auth.data);
  const location = useLocation();
  //   console.log("isAuth:", isAuth);

  if (isAuth) {
    return children;
  } else {
    return (
      <Navigate to={"/login"} state={{ from: location }} replace></Navigate>
    );
  }
};

export default ReqAuth;
