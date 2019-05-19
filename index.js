import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.4.0";
import "assets/scss/style.scss?v=1.0.0";

// pages for this product
import HomePage from "views/HomePage/HomePage.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import RatanovProfilePage from "views/RatanovProfilePage/RatanovProfilePage.jsx";
import Components from "views/Components/Components.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/components" component={Components} />
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/olegratanov" component={RatanovProfilePage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
