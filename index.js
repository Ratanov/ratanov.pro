import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { I18nextProvider } from "react-i18next";

import "assets/scss/material-kit-react.scss?v=1.4.0";
import "assets/scss/style.scss?v=1.0.0";

// pages for this product
import HomePage from "views/HomePage/HomePage.jsx";
import RatanovProfilePage from "views/RatanovProfilePage/RatanovProfilePage.jsx";
import LiverkaProfilePage from "views/LiverkaProfilePage/LiverkaProfilePage.jsx";
import Components from "views/Components/Components.jsx";
import AboutPage from "views/AboutPage/AboutPage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import ServicesPage from "./views/ServicesPage/ServicesPage.jsx";
import ContactPage from "./views/ContactPage/ContactPage.jsx";

import i18n from './i18n';

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
  <I18nextProvider i18n={i18n}>
    <Switch>
      <Route path="/login-page" component={LoginPage} />
      <Route path="/components" component={Components} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/about/liverka" component={LiverkaProfilePage} />
      <Route path="/about/oleg-ratanov" component={RatanovProfilePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </I18nextProvider>
  </Router>,
  document.getElementById("root")
);
