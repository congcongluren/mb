import React from "react";
import Main from './pages/home';
import RouteEntry from './router';

const App = () => {
    return (
        <div className="app">
            <RouteEntry/>
            {/* <Main 
                name='main'
                age='18'
            /> */}
        </div>
    )
}

export default App;