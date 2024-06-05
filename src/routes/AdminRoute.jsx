import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoute = () => {
  const { user, token } = useSelector((state) => state.auth);

  if (!token || user.role !== 'admin') {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

export default AdminRoute;
