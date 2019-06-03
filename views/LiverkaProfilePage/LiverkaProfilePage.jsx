import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
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

import profile from "assets/img/faces/liverka.jpg";

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

import liverkaProfilePageStyle from "assets/jss/material-kit-react/views/liverkaProfilePageStyle";

import ScrollToTopOnMount from "components/ScrollToTop/ScrollToTop.jsx";

class LiverkaProfilePage extends React.Component {
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
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={4}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Губанова Валерия</h3>
                      <h6>Художник Дизайнер Иллюстратор</h6>
                      <Tooltip
                        id="tooltip-liverka-vk"
                        title="Перейти Вконтакт"
                        placement="bottom"
                        classes={{ tooltip: classes.tooltip }}
                      >
                        <a href="https://vk.com/id63163502" target="_blank" rel="noopener noreferrer">
                          <Button justIcon link>
                            <i className={"fab fa-vk"} />
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
                    <h4>Обо мне</h4>
                  </div>
                  <div className={classes.description}>
                    <p>
                       Творческое мышление и креатив мои верные спутники. К проектам отношусь с душой и любовью. Готова творить и реализовывать свое вдохновение в Ваших проектах.
                    </p>
                    <p>
                      Внимательна к деталям, аккуратна.<br />
                      Целеустремленная, коммуникабельная, амбициозная, трудолюбивая.
                    </p>
                    <p>
                      Умею работать сразу над несколькими проектами, в ускоренном режиме ив сжатые сроки.<br />
                      Легко обучаюсь и совершенствую свои навыки.
                    </p>
                  </div>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <div className={classes.title}>
                    <h4>Навыки</h4>
                  </div>
                  <div>
                    <h5 className={"mt-0"}>Рисование карандашом</h5>
                    <CustomLinearProgress variant="determinate" color="gray" value={90} />
                  </div>
                  <div>
                    <h5 className={"mb-0"}>Рисование акварелью</h5>
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
                      value={20}
                      style={{ width: "20%", display: "inline-block", marginBottom: "0"  }}
                    />
                  </div>
                  <div>
                    <h5>CorelDRAW</h5>
                    <CustomLinearProgress variant="determinate" color="success" value={70} />
                  </div>
                  <div>
                    <h5>Photoshop</h5>
                    <CustomLinearProgress variant="determinate" color="info" value={60} />
                  </div>
                  <div>
                    <h5>Adobe Illustrator</h5>
                    <CustomLinearProgress variant="determinate" color="warning" value={60} />
                  </div>
                </GridItem>
              </GridContainer>
              <GridContainer justify="center">
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

export default withStyles(liverkaProfilePageStyle)(LiverkaProfilePage);
