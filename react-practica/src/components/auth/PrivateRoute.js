import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';
import { routes } from '../routes/links';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to={routes.login} replace />;
  }

  return children;
};

export default PrivateRoute;
