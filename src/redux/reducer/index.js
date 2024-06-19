import { combineReducers } from 'redux';
import authReducer from '../slices/authSlice';
import profileReducer from '../slices/profileSlice';
import categoryReducer from '../slices/categorySlice';
import productReducer from '../slices/productSlice';
import productUserReducer from '../slices/productUserSlice';

const reducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    category: categoryReducer,
    product: productReducer,
    productUser: productUserReducer,
});

export default reducer;
