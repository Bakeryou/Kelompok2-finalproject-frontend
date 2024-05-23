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
        </Route>
        <Route path="/" element={<ProductLayout />}>
          <Route path="products" element={<Products />} />
          <Route path="productdetail/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App