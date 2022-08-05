import React from "react";
import Home from '@pages/home';
import List from '@pages/list';

export default [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/list',
        element: <List />
    }
];