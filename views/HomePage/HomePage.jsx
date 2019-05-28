import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import homePageStyle from "assets/jss/material-kit-react/views/homePageStyle.jsx";

// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx";
import WorkSection from "./Sections/WorkSection.jsx";
import PortfolioSection from "./Sections/PortfolioSection.jsx";
import ScrollToTopOnMount from "components/ScrollToTop/ScrollToTop.jsx";

// react-scroll https://github.com/fisshy/react-scroll
import { Link as ScrollLink } from 'react-scroll'

class HomePage extends React.Component {
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
                height: 200,
                color: "white"
            }}
            {...rest}
        />
        <Parallax big filter image={require("assets/img/bg4.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>Веб-студия Ratanov.pro</h1>
                  <h3 className={classes.subtitle}>
                    Объединяем вместе технологию и творчество
                  </h3>
                </div>
              </GridItem>
            </GridContainer>
            <ScrollLink
              className={classes.scrolldown}
              to="scroll-to-container"
              spy={true}
              smooth={true}
              duration={1000} >
              <i className={"fas fa-chevron-down icon-jump"} />
            </ScrollLink>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)+" home-container-mobile"}>
          <div name="scroll-to-container" className={classes.container+" containerMaxContent"}>
            <ProductSection />
            <PortfolioSection />
            <WorkSection />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(homePageStyle)(HomePage);
