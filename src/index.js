import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import App from './app';
import './style/index.scss';

ReactDom.render(
    <React.StrictMode>
        <RecoilRoot>
            <HashRouter>
                <App />
            </HashRouter>
        </RecoilRoot>
    </React.StrictMode>
    ,
    document.getElementById('main')
);