import React from "react";
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import store from '@redux'
import App from "./app";
import './style/index.scss';

import './redux'

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);