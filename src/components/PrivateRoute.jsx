// components/PrivateRoute.jsx
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const loginstatus = localStorage.getItem('isLoggedIn'); // Or use auth context
    return loginstatus ? children : <Navigate to="/signin" replace />;
};

export default PrivateRoute;
