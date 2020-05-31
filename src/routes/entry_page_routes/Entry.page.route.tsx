import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { sortRoles, parseRoles } from 'utilities'
import { entryPageRoutes } from 'routes'
import { Role } from 'constants/roles';

interface EntryPageRouteProps {
  readonly url: string;
  readonly roles: Role[];
}

const EntryPageRouteComponent: React.FC<EntryPageRouteProps> = (props) => {
  const {
    url,
    roles
  } = props

  const defaultRoutes = sortRoles(roles)[0].default_route
  console.log({ sorted_routes: sortRoles(roles) })

  return (
    <Switch>
      {entryPageRoutes(url, parseRoles(roles)).map(route => (
        <Route
          path={route.to}
          exact={route.exact}
          component={route.component}
        />
      ))}
      <Redirect to={`${url}/${defaultRoutes}`} />
    </Switch>
  );
}

export {
  EntryPageRouteComponent as EntryPageRoute
}