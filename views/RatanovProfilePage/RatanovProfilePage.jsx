import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.jsx";

import profile from "assets/img/faces/oleg-ratanov.jpg";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import ratanovProfilePageStyle from "assets/jss/material-kit-react/views/ratanovProfilePageStyle";

import ScrollToTopOnMount from "components/ScrollToTop/ScrollToTop.jsx";

class RatanovProfilePage extends React.Component {
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
            height: 0,
            color: "white"
          }}
          {...rest}
        />
        <Parallax smallprofile filter image={require("assets/img/profile-bg.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)+" container-mobile"}>
          <div>
            <div className={classes.container+" containerMaxContent"}>
              <GridContainer justify="flex-start">
                <GridItem xs={12} sm={12} md={4}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Ратанов Олег</h3>
                      <h6>Директор</h6>
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-twitter"} />
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-instagram"} />
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-facebook"} />
                      </Button>
                    </div>
                  </div>
                </GridItem>
                <GridItem xs={12} sm={12} md={8} className={classes.profileDescription}>
                  <div className={classes.title}>
                    <h4>Здравствуйте!</h4>
                  </div>
                  <div className={classes.description}>
                    <p>
                       Добро пожаловать на сайт веб-студии Ratanov.pro{" "}
                    </p>
                  </div>
                </GridItem>
              </GridContainer>

              <GridContainer justify="flex-start">
                <GridItem xs={12} sm={12} md={4}>
                  <div className={classes.title}>
                    <h4>Скилл</h4>
                  </div>
                  <div>
                    <h5 className={"mt-0"}>HTML, CSS, JS</h5>
                    <CustomLinearProgress
                      variant="determinate"
                      color="primary"
                      value={60}
                    />
                  </div>
                  <div>
                    <h5>SQL, MySQL</h5>
                    <CustomLinearProgress
                      variant="determinate"
                      color="success"
                      value={33}
                    />
                  </div>
                  <div>
                    <h5>PHP, Laravel</h5>
                    <CustomLinearProgress
                      variant="determinate"
                      color="rose"
                      value={25}
                    />
                  </div>
                  <div>
                    <h5>React</h5>
                    <CustomLinearProgress
                      variant="determinate"
                      color="info"
                      value={15}
                    />
                  </div>
                </GridItem>
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper+" px-0"}>
                  <NavPills
                    alignCenter
                    color="primary"
                    tabs={[
                      {
                        tabButton: "Studio",
                        tabIcon: Camera,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={studio1}
                                className={navImageClasses+" imgRounded0"}
                              />
                              <img
                                alt="..."
                                src={studio2}
                                className={navImageClasses+" imgRounded0"}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={studio5}
                                className={navImageClasses+" imgRounded0"}
                              />
                              <img
                                alt="..."
                                src={studio4}
                                className={navImageClasses+" imgRounded0"}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Work",
                        tabIcon: Palette,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work1}
                                className={navImageClasses+" imgRounded0"}
                              />
                              <img
                                alt="..."
                                src={work2}
                                className={navImageClasses+" imgRounded0"}
                              />
                              <img
                                alt="..."
                                src={work3}
                                className={navImageClasses+" imgRounded0"}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work4}
                                className={navImageClasses+" imgRounded0"}
                              />
                              <img
                                alt="..."
                                src={work5}
                                className={navImageClasses+" imgRounded0"}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Favorite",
                        tabIcon: Favorite,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work4}
                                className={navImageClasses+" imgRounded0"}
                              />
                              <img
                                alt="..."
                                src={studio3}
                                className={navImageClasses+" imgRounded0"}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work2}
                                className={navImageClasses+" imgRounded0"}
                              />
                              <img
                                alt="..."
                                src={work1}
                                className={navImageClasses+" imgRounded0"}
                              />
                              <img
                                alt="..."
                                src={studio1}
                                className={navImageClasses+" imgRounded0"}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      }
                    ]}
                  />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(ratanovProfilePageStyle)(RatanovProfilePage);
