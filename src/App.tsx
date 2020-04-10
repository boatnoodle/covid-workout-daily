import React from "react";
import { Switch, Route } from "react-router-dom";
import { Firebase, FirebaseContext } from "components/Firebase";
import { Layout } from "components/Layout";
import { HomePage } from "pages/home";

import GlobalStyle from "global-styles";

const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

function App() {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <Switch>
        <PublicRoute exact path="/" component={HomePage} useLayout={true} />
      </Switch>
      <GlobalStyle />
    </FirebaseContext.Provider>
  );
}

export default App;
