import React from 'react';
import { func, bool } from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

function PublicRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authed === false ? <Component {...props} /> : <Redirect to="/" />}
    />
  );
}

PublicRoute.propTypes = {
  component: func.isRequired,
  authed: bool.isRequired,
};

export default PublicRoute;
