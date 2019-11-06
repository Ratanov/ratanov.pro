import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Button from "components/CustomButtons/Button.jsx";

import homePageStyle from "assets/jss/material-kit-react/views/homePageStyle.jsx";

// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx";
import WorkSection from "./Sections/WorkSection.jsx";
import SectionContent from "./Sections/SectionContent.jsx";
import ScrollToTopOnMount from "components/ScrollToTop/ScrollToTop.jsx";

// react-scroll https://github.com/fisshy/react-scroll
import { Link as ScrollLink } from 'react-scroll';

import { translate } from "react-i18next";

class HomePage extends React.Component {
  render() {
    const { classes, t, ...rest } = this.props;
    return (
      <div>
        <ScrollToTopOnMount />
        <Header
            brand="RATANOV.PRO"
            rightLinks={<HeaderLinks />}
            fixed
            color="transparent"
            changeColorOnScroll={{
                height: 200,
                color: "white"
            }}
            {...rest}
        />
        <Parallax big filter image={require("assets/img/bg1.jpg")}>
          <div className={classes.container}>
            <GridContainer className={classes.containerBrand}>
              <GridItem className="p-0">
                <div className={classes.brand}>
                  <h1 className={classes.title}>{t('HomePage Brand Title')}</h1>
                  <h3 className={classes.subtitle}>{t('HomePage Brand Subtitle')}</h3>
                </div>
              </GridItem>
            </GridContainer>
            <GridContainer className={classes.containerScrollDown} justify="center">
              <ScrollLink
                className={classes.scrolldown}
                to="scroll-to-container"
                spy={true}
                smooth={true}
                duration={1000} >
                <Button simple className={classes.btnScrollDown}>
                  <i className="fas fa-chevron-down icon-jump mr-0" />
                </Button>
              </ScrollLink>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)+" home-container-mobile"}>
          <div name="scroll-to-container" className={classes.container+" containerMaxContent"}>
            <ProductSection />
            <SectionContent />
            <WorkSection />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(homePageStyle)(translate("translations")(HomePage));
