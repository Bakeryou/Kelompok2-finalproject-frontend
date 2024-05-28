import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Home'
import MainLayout from './layouts/MainLayout';
import Login from './Pages/Login';
import Register from './Pages/Register';
import LandingLayout from './layouts/LandingLayout';
import ProductLayout from './layouts/ProductLayout';
import Products from './Pages/Products';
import ProductDetail from './Pages/ProductDetail';
import Cart from './Pages/Cart';
import Profile from './Pages/Profile';
import DashboardLayout from './layouts/DashboardLayout';
import UpdateStock from './Pages/Admin/UpdateStock';
import AddProducts from './Pages/Admin/Products';
import Payment from './Pages/Payment';
import Orders from './Pages/Orders';
import OrderDetail from './Pages/OrderDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/" element={<MainLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="cart" element={<Cart />} />
          <Route path="profile" element={<Profile />} />
          <Route path="payment" element={<Payment />} />
          <Route path="orders" element={<Orders />} />
          <Route path="orderdetail/:orderId" element={<OrderDetail />} />
        </Route>
        <Route path="/" element={<ProductLayout />}>
          <Route path="products" element={<Products />} />
          <Route path="productdetail/:id" element={<ProductDetail />} />
        </Route>
        <Route path="/admin" element={<DashboardLayout />}>
          <Route path="updatestock" element={<UpdateStock />} />
          <Route path="products" element={<AddProducts />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App