import React from "react";
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import store from '@redux';

import App from "./app";
import './style/index.scss';

ReactDom.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
    ,
    document.getElementById('main')
);