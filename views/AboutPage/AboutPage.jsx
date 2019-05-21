import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import aboutPageStyle from "assets/jss/material-kit-react/views/aboutPageStyle.jsx";
import ScrollToTopOnMount from "components/ScrollToTop/ScrollToTop.jsx";

// Sections for this page
import TeamSection from "./Sections/TeamSection.jsx";

class AboutPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <ScrollToTopOnMount />
        <Header
          brand="Ratanov.pro"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 300,
            color: "white"
          }}
          {...rest}
        />
        <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
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
