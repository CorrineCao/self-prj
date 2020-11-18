import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  RouteProps,
} from 'react-router-dom';
import { PrivilegeMapType } from 'util/typesEnum';
import HomePage from "pages/homePage";
import ErrorPage from 'pages/noAuth';

declare global {
  interface Window {
    setInterval: (callback: () => void, time: number) => number;
    privilegeMap: PrivilegeMapType;
    token: string;
  }
}

declare interface AuthRoutePropsType extends RouteProps {
  privilegeName: string;
  deniedError: string;
  hasTab?: boolean;
  mustLink?: boolean;
}

const hasPrivilege = (privilegeName: string): boolean => {
  const privilegeMap = window.privilegeMap || {};
  return !privilegeName || !!privilegeMap[privilegeName];
};

const AuthRoute = ({
  privilegeName,
  deniedError,
  component: Component,
  hasTab,
  mustLink,
  ...otherProps
}: AuthRoutePropsType): React.ReactElement => {

//   if (hasTab) {
//     return (
//       <Route
//         {...otherProps}
//         render={(props): JSX.Element => (
//           <BaseTabBar {...props}>
//             <Component {...props} />
//           </BaseTabBar>
//         )}
//       />
//     );
//   }

  return (
    <Route
      {...otherProps}
      render={(props): JSX.Element => <Component {...props} />}
    />
  );
};

const AppRouter = (): React.ReactElement => {
  return (
    <Router>
      <Switch>
        <AuthRoute
          exact
          path="/"
          component={HomePage}
          hasTab
          privilegeName=""
          deniedError="您没有首页的权限"
        />
        <Route
          render={(): React.ReactElement => (
            <ErrorPage deniedError="没有权限" />
          )}
        />
      </Switch>
    </Router>
  );
};

export default AppRouter;
