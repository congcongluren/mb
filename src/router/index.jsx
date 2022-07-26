import React from "react";
import { Routes, Route } from 'react-router';
import { BrowserRouter, HashRouter } from 'react-router-dom';

import Home from '@pages/home';
import List from '@pages/list';

const RouteEntry = () => {
    return (
        <div className="page">
            <div className="content">
                <HashRouter >
                    <Routes>
                        <Route
                            element={<Home />}
                            path="/home"
                        />
                        <Route element={<List />}
                            path="/list"
                        >
                            <Route
                                element={()=><div>first content</div>}
                                path="/list/first"
                            />
                            <Route
                                element={()=><div>second content</div>}
                                path="/list/second"
                            />
                        </Route>
                    </Routes>
                </HashRouter>
            </div>
        </div>
    )
}


export default RouteEntry;