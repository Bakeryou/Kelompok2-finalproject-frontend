import { combineReducers } from 'redux';
import authReducer from '../slices/authSlice';
import profileReducer from '../slices/profileSlice';
import categoryReducer from '../slices/categorySlice';
import productReducer from '../slices/productSlice';
import productUserReducer from '../slices/productUserSlice';
import cartReducer from '../slices/cartSlice';
import orderReducer from '../slices/orderSlice';
import userReducer from '../slices/userSlice';

const reducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    category: categoryReducer,
    product: productReducer,
    productUser: productUserReducer,
    cart: cartReducer,
    orders: orderReducer,
    users: userReducer,
});

export default reducer;
