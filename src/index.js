import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';

import App from './app';
import './style/index.scss';

ReactDom.render(
    <React.StrictMode>
        <HashRouter>
            <App />
        </HashRouter>
    </React.StrictMode>
    ,
    document.getElementById('main')
);