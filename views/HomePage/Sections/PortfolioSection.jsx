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

import portfolioStyle from "assets/jss/material-kit-react/views/homePageSections/portfolioStyle.jsx";

class PortfolioSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container+" p-0"}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h2 className={classes.title}>Наши работы</h2>
            </GridItem>
          </GridContainer>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4} className={classes.gridItemPadding}>
              <h4 className={classes.portfolioTitle}>Художник Дамир Bozik</h4>
              <a href="https://bozik.ru/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                <img
                  src={bozik}
                  alt="Bozik.ru"
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
                <Button color="primary" size="lg" simple>
                  bozik.ru
                </Button>
              </a>
            </GridItem>
            <GridItem xs={12} sm={12} md={4} className={classes.gridItemPadding}>
              <h4 className={classes.portfolioTitle}>Художница Валерия Liverka</h4>
              <a href="https://liverka-art.ru/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                <img
                  src={liverka}
                  alt="Liverka-art.ru"
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
                <Button color="primary" size="lg" simple>
                  liverka-art.ru
                </Button>
              </a>
            </GridItem>
            <GridItem xs={12} sm={12} md={4} className={classes.gridItemPadding}>
              <h4 className={classes.portfolioTitle}>Интернет магазин Экомёд</h4>
              <a href="https://godmed.ru/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                <img
                  src={godmed}
                  alt="Godmed.ru"
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
                <Button color="primary" size="lg" simple>
                  godmed.ru
                </Button>
              </a>
            </GridItem>
            <GridItem xs={12} sm={12} md={4} className={classes.gridItemPadding}>
              <h4 className={classes.portfolioTitle}>Автоцентр ChipGas</h4>
              <a href="https://chipgas.ru/" target="_blank" rel="noopener noreferrer" className={classes.link}>
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
                <Button color="primary" size="lg" simple>
                  chipgas.ru
                </Button>
              </a>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(portfolioStyle)(PortfolioSection);
