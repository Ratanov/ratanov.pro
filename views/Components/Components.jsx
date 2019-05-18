import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import SectionBasics from "./Sections/SectionBasics.jsx";
import SectionNavbars from "./Sections/SectionNavbars.jsx";
import SectionTabs from "./Sections/SectionTabs.jsx";
import SectionPills from "./Sections/SectionPills.jsx";
import SectionNotifications from "./Sections/SectionNotifications.jsx";
import SectionTypography from "./Sections/SectionTypography.jsx";
import SectionJavascript from "./Sections/SectionJavascript.jsx";
import SectionCarousel from "./Sections/SectionCarousel.jsx";
import SectionCompletedExamples from "./Sections/SectionCompletedExamples.jsx";
import SectionLogin from "./Sections/SectionLogin.jsx";
import SectionExamples from "./Sections/SectionExamples.jsx";
import SectionDownload from "./Sections/SectionDownload.jsx";
import NavPills from "components/NavPills/NavPills.jsx";

import profile from "assets/img/faces/christian.jpg";
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

import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
import Favorite from "@material-ui/icons/Favorite";
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";

class Components extends React.Component {
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
        <Header
          brand="Ratanov.pro"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax image={require("assets/img/bg4.jpg")}>
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

        <div className={classNames(classes.main, classes.mainRaised)}>

            <div className={classes.container}>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={6}>
                        <div className={classes.profile}>
                            <div>
                                <img src={profile} alt="..." className={imageClasses} />
                            </div>
                            <div className={classes.name}>
                                <h3 className={classes.title}>Christian Louboutin</h3>
                                <h6>DESIGNER</h6>
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
                </GridContainer>
                <div className={classes.description}>
                    <p>
                        An artist of considerable range, Chet Faker — the name taken
                        by Melbourne-raised, Brooklyn-based Nick Murphy — writes,
                        performs and records all of his own music, giving it a warm,
                        intimate feel with a solid groove structure.{" "}
                    </p>
                </div>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
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
                                                    className={navImageClasses}
                                                />
                                                <img
                                                    alt="..."
                                                    src={studio2}
                                                    className={navImageClasses}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={4}>
                                                <img
                                                    alt="..."
                                                    src={studio5}
                                                    className={navImageClasses}
                                                />
                                                <img
                                                    alt="..."
                                                    src={studio4}
                                                    className={navImageClasses}
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
                                                    className={navImageClasses}
                                                />
                                                <img
                                                    alt="..."
                                                    src={work2}
                                                    className={navImageClasses}
                                                />
                                                <img
                                                    alt="..."
                                                    src={work3}
                                                    className={navImageClasses}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={4}>
                                                <img
                                                    alt="..."
                                                    src={work4}
                                                    className={navImageClasses}
                                                />
                                                <img
                                                    alt="..."
                                                    src={work5}
                                                    className={navImageClasses}
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
                                                    className={navImageClasses}
                                                />
                                                <img
                                                    alt="..."
                                                    src={studio3}
                                                    className={navImageClasses}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={4}>
                                                <img
                                                    alt="..."
                                                    src={work2}
                                                    className={navImageClasses}
                                                />
                                                <img
                                                    alt="..."
                                                    src={work1}
                                                    className={navImageClasses}
                                                />
                                                <img
                                                    alt="..."
                                                    src={studio1}
                                                    className={navImageClasses}
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

          <SectionBasics />
          <SectionNavbars />
          <SectionTabs />
          <SectionPills />
          <SectionNotifications />
          {/*<SectionTypography />*/}
          <SectionJavascript />
          <SectionCarousel />
          <SectionCompletedExamples />
          <SectionLogin />
          <GridItem md={12} className={classes.textCenter}>
            <Link to={"/login-page"} className={classes.link}>
              <Button color="primary" size="lg" simple>
                View Login Page
              </Button>
            </Link>
          </GridItem>
          <SectionExamples />
          <SectionDownload />
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(componentsStyle)(Components);
