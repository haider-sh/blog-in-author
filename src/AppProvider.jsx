import routes from './routes.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AppContext } from "./AppContext.jsx";
import { useState } from 'react';

const router = createBrowserRouter(routes);

function AppProvider() {

    let [loggedIn, setLoggedIn] = useState(false);

    function saveJwtToken(token) {
        localStorage.setItem("token", token);
    }

    function isLoggedIn(){
        return localStorage.getItem("token");
    }

    function logUserOut() {
        setLoggedIn(false);
        localStorage.clear();
    }

    return (
        <AppContext.Provider value={{ saveJwtToken, loggedIn, isLoggedIn, setLoggedIn, logUserOut }}>
            <RouterProvider router={router} />
        </AppContext.Provider>
    );
}

export default AppProvider;