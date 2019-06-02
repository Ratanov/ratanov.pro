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

class TeamSection extends React.Component {
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Наша команда</h2>
        <div>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <Link to="/about/oleg-ratanov">
                    <img src={ratanov} alt="ratanov" className={imageClasses} />
                  </Link>
                </GridItem>
                <h4 className={classes.cardTitle}>
                  <Link to={"/about/oleg-ratanov"}>Олег Ратанов</Link>
                  <br />
                  <small className={classes.smallTitle}>Директор</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    You can write here details about one of your team members.
                    You can give more details about what they do. Feel free to
                    add some <a href="#pablo">links</a> for people to be able to
                    follow them outside the site.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Tooltip
                    id="tooltip-ratanov-vk"
                    title="Перейти Вконтакт"
                    placement="bottom"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <a href="https://vk.com/o.ratanov" target="_blank" rel="noopener noreferrer">
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
                    title="Перейти в Instagram"
                    placement="bottom"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <a href="https://www.instagram.com/olegratanov/" target="_blank" rel="noopener noreferrer">
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
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <Link to="/about/liverka">
                    <img src={liverka} alt="liverka" className={imageClasses} />
                  </Link>
                </GridItem>
                <h4 className={classes.cardTitle}>
                  <Link to="/about/liverka">Валерия Губанова</Link>
                  <br />
                  <small className={classes.smallTitle}>Художник Дизайнер Иллюстратор</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    You can write here details about one of your team members.
                    You can give more details about what they do. Feel free to
                    add some <a href="#pablo">links</a> for people to be able to
                    follow them outside the site.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Tooltip
                    id="tooltip-liverka-vk"
                    title="Перейти Вконтакт"
                    placement="bottom"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <a href="https://vk.com/id63163502" target="_blank" rel="noopener noreferrer">
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
                    title="Перейти в Instagram"
                    placement="bottom"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <a href="https://www.instagram.com/liverka/" target="_blank" rel="noopener noreferrer">
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

export default withStyles(teamStyle)(TeamSection);
