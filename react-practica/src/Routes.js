import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AdvertsPage from './pages/AdvertsPage';
import AdvertPage from './pages/AdvertPage';
import NewAdvertPage from './pages/NewAdvertPage';
import NotFoundPage from './pages/NotFoundPage';

const Routes = () => {
  const isAuthenticated = () => {
    // Lógica para verificar si el usuario está autenticado
    return true; // Ejemplo: siempre autenticado
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <PrivateRoute exact path="/" component={AdvertsPage} />
        <PrivateRoute exact path="/adverts" component={AdvertsPage} />
        <PrivateRoute exact path="/adverts/:id" component={AdvertPage} />
        <PrivateRoute exact path="/adverts/new" component={NewAdvertPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default Routes;