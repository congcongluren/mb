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
        element: <List />,
        children: [
            {
                index: true,
                element: <div>List first content</div>
            },
            {
                path: '/list/second',
                element: <div>List second content</div>
            }
        ]
    }
];