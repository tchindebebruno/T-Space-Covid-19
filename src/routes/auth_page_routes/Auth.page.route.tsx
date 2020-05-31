import React from 'react';
import { Switch, Route, Redirect, RouteComponentProps, } from "react-router-dom";

import {
  LoginPage,
  ValidatePage,
  SignUpPage,
  RecoverPage,
} from 'pages';

interface AuthPageRouteProps extends RouteComponentProps {
  readonly url: string;
}

const AuthPageRoute: React.FC<AuthPageRouteProps> = (props) => {
  const {
    match: { url },
  } = props

  return (
    <Switch>
      <Route
        path={`${url}/validate/:id`}
        exact
        render={renderProps => (<ValidatePage {...renderProps} />)}
      />
      <Route
        path={`${url}/recover`}
        exact
        render={renderProps => (<RecoverPage {...renderProps} />)}
      />
      <Route
        path={`${url}/sign_up`}
        exact
        render={renderProps => (<SignUpPage {...renderProps} />)}
      />
      <Route
        path={`${url}/login`}
        exact
        render={renderProps => (<LoginPage {...renderProps} />)}
      />
      <Redirect from={url} to={`${url}/login`} />
    </Switch>
  );
}

export default AuthPageRoute
