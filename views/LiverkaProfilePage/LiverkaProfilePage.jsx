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

import profile from "assets/img/faces/liverka.jpg";

import liverkaProfilePageStyle from "assets/jss/material-kit-react/views/liverkaProfilePageStyle";

import ScrollToTopOnMount from "components/ScrollToTop/ScrollToTop.jsx";
import LiverkaPortfolio2 from "./LiverkaPortfolio2.jsx";

import { translate } from "react-i18next";

class LiverkaProfilePage extends React.Component {
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
        <Parallax smallprofile filter image={require("assets/img/landing-bg.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)+" container-mobile"}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>{t('Gubanova Valeria')}</h3>
                    <h6 className={classes.secondTitle}>{t('secondPosition')}</h6>
                    <Tooltip
                      id="tooltip-liverka-vk"
                      title="VK"
                      placement="bottom"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <a href="https://vk.com/id63163502">
                        <Button justIcon link>
                          <i className={"fab fa-vk"} />
                        </Button>
                      </a>
                    </Tooltip>
                    <Tooltip
                      id="tooltip-liverka-insta"
                      title="Instagram"
                      placement="bottom"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <a href="https://www.instagram.com/liverka/">
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
                  <p>{t('secondPositionDescription')}</p>
                  <p>
                    {t('secondPositionDescription2')}
                    <br />
                    {t('secondPositionDescription3')}
                  </p>
                  <p>
                    {t('secondPositionDescription4')}
                  </p>
                  <p>
                    {t('secondPositionDescription5')}
                  </p>
                </div>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <div className={classes.title}>
                  <h4>{t('Skills')}</h4>
                </div>
                <div>
                  <h5 className={"m-0"}>{t('Drawing')}</h5>
                  <CustomLinearProgress
                    variant="determinate"
                    color="danger"
                    value={100}
                    style={{ width: "20%", display: "inline-block", marginBottom: "0"  }}
                  />
                  <CustomLinearProgress
                    variant="determinate"
                    color="warning"
                    value={100}
                    style={{ width: "20%", display: "inline-block", marginBottom: "0"  }}
                  />
                  <CustomLinearProgress
                    variant="determinate"
                    color="success"
                    value={100}
                    style={{ width: "20%", display: "inline-block", marginBottom: "0"  }}
                  />
                  <CustomLinearProgress
                    variant="determinate"
                    color="info"
                    value={100}
                    style={{ width: "20%", display: "inline-block", marginBottom: "0"  }}
                  />
                  <CustomLinearProgress
                    variant="determinate"
                    color="primary"
                    value={50}
                    style={{ width: "20%", display: "inline-block", marginBottom: "0"  }}
                  />
                </div>
                <div>
                  <h5>CorelDRAW</h5>
                  <CustomLinearProgress variant="determinate" color="success" value={70} />
                </div>
                <div>
                  <h5>Photoshop</h5>
                  <CustomLinearProgress variant="determinate" color="info" value={70} />
                </div>
                <div>
                  <h5>Adobe Illustrator</h5>
                  <CustomLinearProgress variant="determinate" color="warning" value={50} />
                </div>
              </GridItem>
            </GridContainer>
          </div>
          <LiverkaPortfolio2 />
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(liverkaProfilePageStyle)(translate("translations")(LiverkaProfilePage));
