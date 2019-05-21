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
import AboutPage from "views/AboutPage/AboutPage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import ContactPage from "./views/ContactPage/ContactPage.jsx";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/login-page" component={LoginPage} />
      <Route path="/components" component={Components} />
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/about/oleg-ratanov" component={RatanovProfilePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
