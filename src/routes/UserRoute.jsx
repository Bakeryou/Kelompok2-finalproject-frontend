import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const UserRoute = () => {
  const { user, token } = useSelector((state) => state.auth);

  return token && user.role === 'user' ? <Outlet /> : <Navigate to="/login" />;
};

export default UserRoute;
