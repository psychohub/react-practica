import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthProvider';
import { routes } from '../routes/links';

const RequireAuth = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to={routes.login} state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
