/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { List, ListItem, withStyles } from "@material-ui/core";

import footerStyle from "assets/jss/material-kit-react/components/footerStyle.jsx";
import reactLogo from 'assets/img/react-logo.svg';

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        {/*<div className={classes.left}>*/}
          {/*<List className={classes.list}>*/}
            {/*<ListItem className={classes.inlineBlock}>*/}
              {/*<Link to="/about" className={classes.block+" pl-0"}>О нас</Link>*/}
            {/*</ListItem>*/}
          {/*</List>*/}
        {/*</div>*/}
        <div className={classes.center}>
          &copy; {1900 + new Date().getYear()}{" "}
          <a
            href="https://www.ratanov.pro"
            className={aClasses}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ratanov.pro
          </a>{" "}Web Studio
          <br />
          Made with <img src={reactLogo} className="react-logo" alt="React-logo" />
          <a
            href="https://reactjs.org/"
            className={"react-link"}
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
