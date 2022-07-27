import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";

import reducers from './reducer';

const middlewares = [thunk];
const config = [reducers];

let composeEnhancers = compose;
if (process.env.NODE_ENV === `development`) {
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
        // redux 开发可视化调试工具
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    }
}

config.push(composeEnhancers(applyMiddleware(...middlewares)));

const store = createStore(...config);

export default store