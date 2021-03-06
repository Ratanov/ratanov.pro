import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import portfolioStyle from "assets/jss/material-kit-react/views/homePageSections/portfolioStyle.jsx";
import { translate } from "react-i18next";

// Sections for this page
import WebsiteSection from "./WebsiteSection.jsx";

class PortfolioSection extends React.Component {
  render() {
    const { classes, t } = this.props;
    return (
      <div className={classes.section}>
        {/*<div className={classes.container}>*/}
        <h2 className={classes.title}>{t('PortfolioSection Title')}</h2>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={12} className={"portfolioSection-mobile"}>
              <WebsiteSection />
            </GridItem>
          </GridContainer>
        {/*</div>*/}
      </div>
    );
  }
}

export default withStyles(portfolioStyle)(translate("translations")(PortfolioSection));