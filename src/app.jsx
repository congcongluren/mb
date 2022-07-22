import React from "react";
import Main from './pages/main';

const App = () => {
    return (
        <div id="app">
            hello world!!
            <Main 
                name='main'
                age='18'
            />
        </div>
    )
}

export default App;