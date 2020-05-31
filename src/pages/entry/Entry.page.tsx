import * as React from 'react';
import {
  ContainerPageRoute,
  AuthPageRoute,
} from 'routes';
import { Route, Switch } from 'react-router-dom'
import { NotFoundPage, ExternalPage, ExternalProtectedPage } from 'pages';
import { PrivateRoute } from 'components';

export interface EntryPageProps {
}

export const EntryPage: React.FC<EntryPageProps> = props => {

  return (
    <>
      <Switch>
        <Route
          path={'/'}
          render={renderProps => <ContainerPageRoute {...renderProps} />}
        />
        <Route
          path={'/dashboard'}
          render={renderProps => <ContainerPageRoute {...renderProps} />}
        />
        <Route
          path={'/external'}
          render={renderProps => <ExternalPage {...renderProps} />}
        />
        <PrivateRoute path='/external_protected'>
          <ExternalProtectedPage />
        </PrivateRoute>
        <Route
          path={'/auth'}
          render={renderProps => <AuthPageRoute url='/auth' {...renderProps} />}
        />
        <Route
          // path={'/auth'}
          render={renderProps => <NotFoundPage {...renderProps} />}
        />
      </Switch>
    </>
  );
}
