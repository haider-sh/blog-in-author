    import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { AppContext } from './AppContext';

    const PrivateRoutes = () => {
        let {loggedIn, isLoggedIn} = useContext(AppContext);
        const isAuthenticated = loggedIn || isLoggedIn();
        console.log(loggedIn, isLoggedIn());
        return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
    };

    export default PrivateRoutes;