import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children, redirectTo = '/' }) => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const isRefreshing = useSelector((state) => state.auth.isRefreshing);
    const shouldRedirect = !isLoggedIn && !isRefreshing;

    return shouldRedirect ? <Navigate to={redirectTo} /> : children;
};

export default PrivateRoute;
