import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ children, ...rest }) => {
  const fakeAuth = false

  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/auth/login",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}

export {
  PrivateRoute,
}