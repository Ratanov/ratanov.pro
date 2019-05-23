import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import aboutPageStyle from "assets/jss/material-kit-react/views/aboutPageStyle.jsx";
import ScrollToTopOnMount from "components/ScrollToTop/ScrollToTop.jsx";

// Sections for this page
import TeamSection from "./Sections/TeamSection.jsx";

class AboutPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <ScrollToTopOnMount />
        <Header
          brand="Ratanov.pro"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 100,
            color: "white"
          }}
          {...rest}
        />
        <Parallax smallabout filter image={require("assets/img/bg2.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)+" container-mobile"}>
          <div className={classes.container}>
            <TeamSection />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(aboutPageStyle)(AboutPage);
