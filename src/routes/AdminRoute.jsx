import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoute = () => {
  const { user, token } = useSelector((state) => state.auth);

  return token && user.role === 'admin' ? <Outlet /> : <Navigate to="/" />;
};

export default AdminRoute;
