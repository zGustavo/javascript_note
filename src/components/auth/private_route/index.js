import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({ children, redirectTo }) => {
    const isAuthenticated = localStorage.getItem("token") !== null;
    console.log("isAuth", isAuthenticated);
    return isAuthenticated ? children : <Navigate to={redirectTo} />
}

export default PrivateRouter;
