import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from '../../pages/LoginPage';
import AdvertsPage from '../../pages/AdvertsPage';
import AdvertPage from '../../pages/AdvertPage';
import NewAdvertPage from '../../pages/NewAdvertPage';
import NotFoundPage from '../../pages/NotFoundPage';
import RequireAuth from '../auth/RequireAuth';
import { routes } from './links';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={routes.login} element={<LoginPage />} />
      <Route path="/" element={<Navigate replace to={routes.login} />} />
      <Route
        path={routes.adverts}
        element={
          <RequireAuth>
            <AdvertsPage />
          </RequireAuth>
        }
      />
      <Route
        path={routes.advertsDetail}
        element={
          <RequireAuth>
            <AdvertPage />
          </RequireAuth>
        }
      />
      <Route
        path={routes.advertsNew}
        element={
          <RequireAuth>
            <NewAdvertPage />
          </RequireAuth>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
