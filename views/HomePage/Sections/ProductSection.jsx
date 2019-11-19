import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Fingerprint from "@material-ui/icons/Fingerprint";
import Favorite from "@material-ui/icons/Favorite";
import Cake from "@material-ui/icons/Cake";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/homePageSections/productStyle.jsx";
import { translate } from "react-i18next";

class ProductSection extends React.Component {
  render() {
    const { classes, t } = this.props;
    return (
      <div className={classes.section}>
        {/*<GridContainer justify="center">*/}
          {/*<GridItem xs={10} md={8} className={"px-0"}>*/}
            {/*<h3 className={classes.title+" home-txt"}>Material Kit React PRO is a Material-UI Kit with a fresh, new design inspired by Google's Material Design. You asked for it, so we built it. It's a great pleasure to introduce to you the material concepts in an easy to use and beautiful set of components.</h3>*/}
          {/*</GridItem>*/}
        {/*</GridContainer>*/}
        <GridContainer justify="left">
          <GridItem xs={12}>
            <h2 className={classes.title+" mt-30px"}>{t('ProductSection Title')}</h2>
            {/*<h5 className={classes.description}>*/}
              {/*3 наших качества*/}
            {/*</h5>*/}
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4} className="py-15px">
            <div className="info-area">
              <InfoArea
                title={t('ProductSection FirstSection Title')}
                description={t('ProductSection FirstSection Description')}
                icon={Fingerprint}
                iconColor="info"
                vertical
              />
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={4} className="py-15px">
            <div className="info-area">
              <InfoArea
                title={t('ProductSection SecondSection Title')}
                description={t('ProductSection SecondSection Description')}
                icon={Cake}
                iconColor="warning"
                vertical
              />
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={4} className="py-15px">
            <div className="info-area">
              <InfoArea
                title={t('ProductSection ThirdSection Title')}
                description={t('ProductSection ThirdSection Description')}
                icon={Favorite}
                iconColor="rose"
                vertical
              />
            </div>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(productStyle)(translate("translations")(ProductSection));