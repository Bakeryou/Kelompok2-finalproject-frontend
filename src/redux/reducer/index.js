import { combineReducers } from 'redux';
import authReducer from '../slices/authSlice';
import profileReducer from '../slices/profileSlice';

const reducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
});

export default reducer;
