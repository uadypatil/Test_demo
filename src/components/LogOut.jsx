// components/PrivateRoute.jsx
import { Navigate } from 'react-router-dom';

const LogOut = () => {
    localStorage.removeItem('isLoggedIn');
    return <Navigate to="/signin" replace />;
};

export default LogOut;
