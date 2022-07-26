import { legacy_createStore as createStore, combineReducers } from 'redux';
import userReducer from './reducer/userReducer';

const store = createStore(
    combineReducers({
        user: userReducer
    })
);

export default store