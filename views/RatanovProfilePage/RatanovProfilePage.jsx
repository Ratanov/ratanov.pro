import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.jsx";

import profile from "assets/img/faces/oleg-ratanov.jpg";

import ratanovProfilePageStyle from "assets/jss/material-kit-react/views/ratanovProfilePageStyle";

import ScrollToTopOnMount from "components/ScrollToTop/ScrollToTop.jsx";

// Sections for this page
import WebsiteSection from "views/HomePage/Sections/WebsiteSection.jsx";

import { translate } from "react-i18next";

class RatanovProfilePage extends React.Component {
  render() {
    const { classes, t, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div>
        <ScrollToTopOnMount />
        <Header
          brand="RATANOV.PRO"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 0,
            color: "white"
          }}
          {...rest}
        />
        <Parallax smallprofile filter image={require("assets/img/profile-bg.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)+" container-mobile"}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>{t('Ratanov Oleg')}</h3>
                    <h6>{t('firstPosition')}</h6>
                    <Tooltip
                      id="tooltip-ratanov-vk"
                      title="Перейти Вконтакт"
                      placement="bottom"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <a href="https://vk.com/o.ratanov" target="_blank" rel="noopener noreferrer">
                        <Button justIcon link>
                          <i className={"fab fa-vk"} />
                        </Button>
                      </a>
                    </Tooltip>
                    <Tooltip
                      id="tooltip-ratanov-insta"
                      title="Перейти в Instagram"
                      placement="bottom"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <a href="https://www.instagram.com/olegratanov/" target="_blank" rel="noopener noreferrer">
                        <Button justIcon link>
                          <i className={"fab fa-instagram"} />
                        </Button>
                      </a>
                    </Tooltip>
                  </div>
                </div>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <div className={classes.title}>
                  <h4>{t('About me')}</h4>
                </div>
                <div className={classes.description}>
                  <p>
                    {t('firstPositionDescription')}
                  </p>
                </div>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <div className={classes.title}>
                  <h4>{t('Skills')}</h4>
                </div>
                <div>
                  <h5 className={"mt-0"}>HTML, CSS, JS</h5>
                  <CustomLinearProgress
                    variant="determinate"
                    color="primary"
                    value={80}
                  />
                </div>
                <div>
                  <h5>SQL, MySQL</h5>
                  <CustomLinearProgress
                    variant="determinate"
                    color="success"
                    value={50}
                  />
                </div>
                <div>
                  <h5>PHP, Laravel</h5>
                  <CustomLinearProgress
                    variant="determinate"
                    color="rose"
                    value={30}
                  />
                </div>
                <div>
                  <h5>React</h5>
                  <CustomLinearProgress
                    variant="determinate"
                    color="info"
                    value={40}
                  />
                </div>
              </GridItem>
            </GridContainer>
          </div>
          <br /><br /><br />
          <div className={"portfolioSection-mobile"}>
            <WebsiteSection />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(ratanovProfilePageStyle)(translate("translations")(RatanovProfilePage));
