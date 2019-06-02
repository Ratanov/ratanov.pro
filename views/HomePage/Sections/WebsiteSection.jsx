import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";

import bozik from "assets/img/portfolio/bozik.jpg";
import liverka from "assets/img/portfolio/liverka-art.jpg";
import godmed from "assets/img/portfolio/godmed.jpg";
import chipgas from "assets/img/portfolio/chipgas.jpg";

import websiteSectionStyle from "assets/jss/material-kit-react/views/homePageSections/websiteSectionStyle.jsx";

class WebsiteSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        {/*<div className={classes.container+" p-0"}>*/}
          {/*<GridContainer justify="center">*/}
            {/*<GridItem xs={12} sm={12} md={8}>*/}
              {/*<h2 className={classes.title}>Наши работы</h2>*/}
            {/*</GridItem>*/}
          {/*</GridContainer>*/}
          <GridContainer justify="center" className={"m-0"}>
            <GridItem xs={12} sm={12} md={6} className={"home-page-portfolio-item"}>
              <h4 className={classes.portfolioTitle}>Художник Дамир Bozik</h4>
              <img
                src={bozik}
                alt="bozik-art.ru"
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <a href="https://bozik.ru/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                <Button color="primary" size="lg" simple>
                  https://bozik.ru/
                </Button>
              </a>
            </GridItem>
            <GridItem xs={12} sm={12} md={6} className={"home-page-portfolio-item"}>
              <h4 className={classes.portfolioTitle}>Художница Валерия Liverka</h4>
              <img
                src={liverka}
                alt="liverka-art.ru"
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <a href="https://liverka-art.ru/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                <Button color="primary" size="lg" simple>
                  https://liverka-art.ru/
                </Button>
              </a>
            </GridItem>
            <GridItem xs={12} sm={12} md={6} className={"home-page-portfolio-item"}>
              <h4 className={classes.portfolioTitle}>Интернет магазин Экомёд</h4>
              <img
                src={godmed}
                alt="godmed.ru"
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <a href="https://godmed.ru/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                <Button color="primary" size="lg" simple>
                  https://godmed.ru/
                </Button>
              </a>
            </GridItem>
            <GridItem xs={12} sm={12} md={6} className={"home-page-portfolio-item"}>
              <h4 className={classes.portfolioTitle}>Автоцентр ChipGas</h4>
              <img
                src={chipgas}
                alt="Chipgas.ru"
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <a href="https://chipgas.ru/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                <Button color="primary" size="lg" simple>
                  https://chipgas.ru/
                </Button>
              </a>
            </GridItem>
          </GridContainer>
        {/*</div>*/}
      </div>
    );
  }
}

export default withStyles(websiteSectionStyle)(WebsiteSection);
