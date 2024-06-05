import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthRoute = () => {
  const { user, token } = useSelector((state) => state.auth);

  if (!token) {
    return <Outlet />;
  } else if (user?.role === 'admin') {
    return <Navigate to="/admin/updatestock" replace />;
  } else if (user?.role === 'user') {
    return <Navigate to="/" replace />;
  } else {
    return <Navigate to="/" replace />;
  }
};

export default AuthRoute;
