import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./Homepage/Homepage";


export default (
  <Switch>
    <Route exact path="/" component={Homepage} />
  </Switch>
);
