import { combineReducers } from 'redux';
import authReducer from '../slices/authSlice';
import profileReducer from '../slices/profileSlice';
import categoryReducer from '../slices/categorySlice';

const reducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    category: categoryReducer,
});

export default reducer;
