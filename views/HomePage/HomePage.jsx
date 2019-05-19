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
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx";
import TeamSection from "./Sections/TeamSection.jsx";
import WorkSection from "./Sections/WorkSection.jsx";
// import PortfolioSection from "./Sections/PortfolioSection.jsx";
import ScrollToTopOnMount from "components/ScrollToTop/ScrollToTop.jsx";

const dashboardRoutes = [];

class LandingPage extends React.Component {
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
                  height: 300,
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
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)+" container-mobile"}>
          <div className={classes.container}>
            <ProductSection />
            <TeamSection />
            {/*<PortfolioSection />*/}
            <WorkSection />
          </div>
        </div>
        <Footer />

      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
