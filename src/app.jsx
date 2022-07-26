import React from "react";
import { useRoutes } from "react-router-dom"
import routerList from './router';

const App = () => {
    const element = useRoutes(routerList);
    return (
        <div className="app">
            {element}
        </div>
    )
}

export default App;