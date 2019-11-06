import React from "react";
// react components for routing our app without refresh
import { HashLink as Link } from 'react-router-hash-link';
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
// @material-ui/core components
import Button from "components/CustomButtons/Button.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
// library used for cool animations
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

import contentStyle from "assets/jss/material-kit-react/views/homePageSections/contentStyle.jsx";
// images
import presentationiPad from "assets/img/presentationViewSectionComponent/presentation-ipad.jpg";
import presentationiPadComments from "assets/img/presentationViewSectionComponent/ipad-comments.jpg";
import presentationiPadTable from "assets/img/presentationViewSectionComponent/ipad-table.jpg";

import { translate } from "react-i18next";
// @material-ui/icons
import { ArrowForward } from "@material-ui/icons";

class SectionContent extends React.Component {
  render() {
    const { classes, t } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem md={4} className={classes.sectionDescription}>
              <h3 className={classes.title}>Content Areas</h3>
              <h6 className={classes.description}>
                For Areas that Need More Space
              </h6>
              <p className={classes.description}>
                If you need elements such as tables, comments, description
                areas, tabs and many others, we{"'"}ve got you covered. We took
                into consideration multiple use cases and came up with some
                specific elements that you will love to use. They{"'"}re
                beautiful and easy to use for the end user navigating your
                website.{" "}
              </p>
              <Link to="/about/oleg-ratanov#websites" className={classes.navLink+" linkIcon"}>
                <Button
                  color="primary"
                  round
                >
                  Посмотреть работы
                  <ArrowForward className={"iconArrowForward"} />
                </Button>
              </Link>
            </GridItem>
            <GridItem md={8}>
              <div className={classes.imageContainer}>
                <div className={classes.animeAreaImg}>
                  <ScrollAnimation animateIn="fadeInUp">
                  <img
                    src={presentationiPadComments}
                    alt="iPad comments"
                    className={classes.areaImg}
                  />
                  </ScrollAnimation>
                </div>
                <div className={classes.animeInfoImg}>
                  <ScrollAnimation animateIn="fadeInUp">
                  <img
                    src={presentationiPadTable}
                    alt="iPad table"
                    className={classes.infoImg}
                  />
                  </ScrollAnimation>
                </div>
                <img
                  className={classes.ipadImg}
                  src={presentationiPad}
                  alt="iPad"
                />
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(contentStyle)(translate("translations")(SectionContent));