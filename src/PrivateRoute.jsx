import React from 'react';
import { func, bool, shape, string } from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authed === true ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect
            to={{ pathname: '/signin', state: { from: props.location } }}
          />
        )}
    />
  );
}

PrivateRoute.propTypes = {
  component: func.isRequired,
  authed: bool.isRequired,
  location: shape({
    pathname: string,
    search: string,
  }),
};

PrivateRoute.defaultProps = {
  location: null,
};

export default PrivateRoute;
