import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const UserRoute = () => {
  const { user, token } = useSelector((state) => state.auth);

  if (!token || user.role !== 'user') {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;};

export default UserRoute;
