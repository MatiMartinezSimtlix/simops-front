import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Layout from "./shared/layout/Layout";
import Index from "./pages/index";
import Items from "./pages/items";
import Accessories from "./pages/accessories";

const Routes = () => {
  return (
    <Switch>
      <Layout>
        <Route exact path="/" component={Index} />
        <Route exact path="/items" component={Items} />
        <Route exact path="/accessories" component={Accessories} />
        <Route render={() => <Redirect to="/" />} />
      </Layout>
    </Switch>
  );
};

export default Routes;
