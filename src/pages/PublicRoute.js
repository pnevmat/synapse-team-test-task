import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import selectors from '../redux/selectors/selectors';

const PublicRoute = ({ component: Component, redirectTo, ...routeProps }) => {
  const isAuth = useSelector(selectors.getIsAuthorised);

  return (
    <Route
      {...routeProps}
      render={props =>
        isAuth && routeProps.restricted ? (
          <Redirect to={redirectTo} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;