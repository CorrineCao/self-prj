import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  RouteProps,
} from 'react-router-dom';
import { PrivilegeMapType } from 'util/typesEnum';
import { Hello2 } from "pages/Hello2";
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
          component={Hello2}
          hasTab
          privilegeName="JG_COURSE_MAIN_AUTH"
          deniedError="您没有首页的权限"
        />
        <AuthRoute
          path="/test"
          component={Hello2}
          hasTab
          privilegeName="JG_COURSE_MAIN_AUTH"
          deniedError="您不能查看收藏列表"
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
