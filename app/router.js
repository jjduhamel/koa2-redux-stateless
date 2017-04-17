import React, { Component } from "react";
import { Route, Link } from "react-router";

import Content from "./content";
import Homepage from "./containers/Homepage";

export const Routes = (
  <Route component={ Content }>
    <Route path="/" component={ Homepage } />
    <Route path="/rules" component={ Homepage } />
    <Route path="/team/:id" component={ Homepage } />
    <Route path="/player/:id" component={ Homepage } />
    <Route path="/game/:id" component={ Homepage } />
  </Route>
);

export default Routes;
