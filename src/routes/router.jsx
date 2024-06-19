import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../Pages/Home";
import LandingLayout from "../layouts/LandingLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Cart from "../Pages/Cart";
import Payment from "../Pages/Payment";
import UserRoute from "./UserRoute";
import Profile from '../Pages/Profile';
import Orders from "../Pages/Orders";
import DetailOrder from "../Pages/OrderDetail";
import PaymentSuccess from "../Pages/PaymentSuccess";
import ProductLayout from "../layouts/ProductLayout";
import Product from "../Pages/Products";
import AdminRoute from "./AdminRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import Products from "../Pages/Admin/Products";
import ProductDetail from "../Pages/ProductDetail";
import Category from "../Pages/Admin/Category";
import Users from "../Pages/Admin/Users";
import OrdersAdmin from "../Pages/Admin/Orders";
import Report from "../Pages/Admin/Report";
import ProfileAdmin from "../Pages/Admin/Profile";
import AuthRoute from "./AuthRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
        ],
    },
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "login",
          element: <AuthRoute />,
          children: [
            {
              index: true,
              element: <Login />,
            }
          ],
        },
        {
          path: "register",
          element: <AuthRoute />,
          children: [
            {
              index: true,
              element: <Register />,
            }
          ],
        },
        {
          path: "cart",
          element: <UserRoute />,
          children: [
            {
              index: true,
              element: <Cart />,
            }
          ],
        },
        {
          path: "payment",
          element: <UserRoute />,
          children: [
            {
              index: true,
              element: <Payment />,
            }
          ],
        },
        {
          path: "profile",
          element: <UserRoute />,
          children: [
            {
              index: true,
              element: <Profile />,
            }
          ],
        },
        {
          path: "orders",
          element: <UserRoute />,
          children: [
            {
              index: true,
              element: <Orders />,
            },
          ],
        },
        {
          path: "orderdetail/:orderId",
          element: <UserRoute />,
          children: [
            {
              index: true,
              element: <DetailOrder />,
            }
          ],
        },
        {
          path: "paymentsuccess",
          element: <UserRoute />,
          children: [
            {
              index: true,
              element: <PaymentSuccess />,
            },
          ],
        },
      ],
    },
    {
        path: "/",
        element: <ProductLayout />,
        children: [
          {
            path: "product",
            element: <Product />,
          },
          {
            path: "productdetail/:id",
            element: <ProductDetail />,
          },
        ],
      },
    {
      path: "/admin",
      element: <AdminRoute />,
      children: [
        {
          path: "",
          element: <DashboardLayout />,
          children: [
            {
              path: "products",
              element: <Products />,
            },
            {
                path: "category",
                element: <Category />,
            },
            {
                path: "users",
                element: <Users />,
            },
            {
                path: "orders",
                element: <OrdersAdmin />,
            },
            {
                path: "report",
                element: <Report />,
            },
            {
                path: "profile",
                element: <ProfileAdmin />,
            },
          ],
        },
      ],
    },
  ]);
  
  export default router;