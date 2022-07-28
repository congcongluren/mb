import React from "react";
import Home from '@pages/home';
// import List from '@pages/list';
// import First from '@pages/list/first';

export default [
    {
        path: '/',
        element: <Home />
    },
    // {
    //     path: '/list',
    //     element: <List />,
    //     children: [
    //         {
    //             index: true,
    //             element: <First/>
    //         },
    //         {
    //             path: '/list/second',
    //             element: <div>List second content</div>
    //         }
    //     ]
    // }
];