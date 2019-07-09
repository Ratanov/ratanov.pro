import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import teamStyle from "assets/jss/material-kit-react/views/aboutPageSections/teamStyle.jsx";

import ratanov from "assets/img/faces/oleg-ratanov.jpg";
import liverka from "assets/img/faces/liverka.jpg";
import { translate } from "react-i18next";

class TeamSection extends React.Component {
  render() {
    const { classes, t } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>{t('Our Team')}</h2>
        <div>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={5}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <Link to="/about/oleg-ratanov">
                    <img src={ratanov} alt="ratanov" className={imageClasses} />
                  </Link>
                </GridItem>
                <h4 className={classes.cardTitle}>
                  <Link to={"/about/oleg-ratanov"}>{t('Oleg Ratanov')}</Link>
                  <br />
                  <small className={classes.smallTitle}>{t('firstPosition')}</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>{t('firstPositionDescription')}</p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Tooltip
                    id="tooltip-ratanov-vk"
                    title="GitHub"
                    placement="bottom"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <a href="https://github.com/Ratanov">
                      <Button justIcon link>
                        <i className={"fab fa-github"} />
                      </Button>
                    </a>
                  </Tooltip>
                  <Tooltip
                    id="tooltip-ratanov-vk"
                    title="VK"
                    placement="bottom"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <a href="https://vk.com/o.ratanov">
                      <Button
                        justIcon
                        color="transparent"
                        className={classes.margin5}
                      >
                        <i className={classes.socials + " fab fa-vk"} />
                      </Button>
                    </a>
                  </Tooltip>
                  <Tooltip
                    id="tooltip-ratanov-insta"
                    title="Instagram"
                    placement="bottom"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <a href="https://www.instagram.com/olegratanov/">
                      <Button
                        justIcon
                        color="transparent"
                        className={classes.margin5}
                      >
                        <i className={classes.socials + " fab fa-instagram"} />
                      </Button>
                    </a>
                  </Tooltip>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={5}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <Link to="/about/liverka">
                    <img src={liverka} alt="liverka" className={imageClasses} />
                  </Link>
                </GridItem>
                <h4 className={classes.cardTitle}>
                  <Link to="/about/liverka">{t('Valeria Gubanova')}</Link>
                  <br />
                  <small className={classes.smallTitle}>{t('secondPosition')}</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>{t('secondPositionDescription')}</p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Tooltip
                    id="tooltip-liverka-vk"
                    title="VK"
                    placement="bottom"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <a href="https://vk.com/id63163502">
                      <Button
                        justIcon
                        color="transparent"
                        className={classes.margin5}
                      >
                        <i className={classes.socials + " fab fa-vk"} />
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
                      <Button
                        justIcon
                        color="transparent"
                        className={classes.margin5}
                      >
                        <i className={classes.socials + " fab fa-instagram"} />
                      </Button>
                    </a>
                  </Tooltip>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(teamStyle)(translate("translations")(TeamSection));
