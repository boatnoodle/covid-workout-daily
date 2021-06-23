import React from "react";
import GlobalStyle from "global-styles";

import { Switch, Route } from "react-router-dom";
import { Layout } from "components/Layout";
import { HomePage } from "pages/home";
import { SettingWorkoutPage } from "pages/setting-workout";
import { WorkoutPage } from "pages/workout";
import { SignIn } from "containers/auth/singin";
import { LayoutAuth } from "components/Layout/auth";
import { ProvideAuth, ProtectedFragment } from "hooks/auth/useSession";

const PublicRoute = ({
  component: Component,
  useLayout,
  protectedRoute,
  ...rest
}) => {
  const layout = (props) => {
    if (useLayout === "auth") {
      if (protectedRoute)
        return (
          <ProtectedFragment>
            <LayoutAuth>
              <Component {...props} />
            </LayoutAuth>
          </ProtectedFragment>
        );
      else
        return (
          <LayoutAuth>
            <Component {...props} />
          </LayoutAuth>
        );
    } else if (useLayout === "main")
      if (protectedRoute)
        return (
          <ProtectedFragment>
            <Layout>
              <Component {...props} />
            </Layout>
          </ProtectedFragment>
        );
      else
        return (
          <Layout>
            <Component {...props} />
          </Layout>
        );
  };

  return <Route {...rest} render={(props) => layout(props)} />;
};

function App() {
  return (
    <ProvideAuth>
      <Switch>
        <PublicRoute
          exact
          path="/"
          component={HomePage}
          useLayout="main"
          protectedRoute={true}
        />
        <PublicRoute
          exact
          path="/sign-in"
          component={SignIn}
          useLayout="auth"
          protectedRoute={false}
        />
        <PublicRoute
          exact
          path="/setting-workout"
          component={SettingWorkoutPage}
          useLayout="main"
          protectedRoute={true}
        />
        <PublicRoute
          exact
          path="/workout"
          component={WorkoutPage}
          useLayout="main"
          protectedRoute={true}
        />
      </Switch>
      <GlobalStyle />
    </ProvideAuth>
  );
}

export default App;
