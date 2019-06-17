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
    const { classes } = this.props;
    const { t } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>{t('ProductSection Title')}</h2>
            {/*<h5 className={classes.description}>*/}
              {/*3 наших качества*/}
            {/*</h5>*/}
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title={t('ProductSection FirstSection Title')}
                description={t('ProductSection FirstSection Description')}
                icon={Fingerprint}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title={t('ProductSection SecondSection Title')}
                description={t('ProductSection SecondSection Description')}
                icon={Cake}
                iconColor="warning"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title={t('ProductSection ThirdSection Title')}
                description={t('ProductSection ThirdSection Description')}
                icon={Favorite}
                iconColor="rose"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(translate("translations")(ProductSection));