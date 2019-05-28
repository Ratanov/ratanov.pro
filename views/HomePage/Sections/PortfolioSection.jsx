import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import portfolioStyle from "assets/jss/material-kit-react/views/homePageSections/portfolioStyle.jsx";

// Sections for this page
import WebsiteSection from "./WebsiteSection.jsx";

class PortfolioSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        {/*<div className={classes.container}>*/}
        <h2 className={classes.title}>Наши работы</h2>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={12} className={"portfolioSection-mobile"}>
              <NavPills
                alignCenter
                color="primary"
                tabs={[
                  {
                    tabButton: "Веб-сайты",
                    tabIcon: Dashboard,
                    tabContent: (
                      <WebsiteSection />
                    )
                  },
                  {
                    tabButton: "Дизайн",
                    tabIcon: Schedule,
                    tabContent: (
                      <span>
                        <p>
                          Efficiently unleash cross-media information without
                          cross-media value. Quickly maximize timely
                          deliverables for real-time schemas.
                        </p>
                        <br />
                        <p>
                          Dramatically maintain clicks-and-mortar solutions
                          without functional solutions. Dramatically visualize
                          customer directed convergence without revolutionary
                          ROI. Collaboratively administrate empowered markets
                          via plug-and-play networks. Dynamically
                          procrastinate B2C users after installed base
                          benefits.
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Tasks",
                    tabIcon: List,
                    tabContent: (
                      <span>
                        <p>
                          Collaboratively administrate empowered markets via
                          plug-and-play networks. Dynamically procrastinate
                          B2C users after installed base benefits.
                        </p>
                        <br />
                        <p>
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI. Collaboratively
                          administrate empowered markets via plug-and-play
                          networks. Dynamically procrastinate B2C users after
                          installed base benefits.
                        </p>
                        <br />
                        <p>
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI. Collaboratively
                          administrate empowered markets via plug-and-play
                          networks. Dynamically procrastinate B2C users after
                          installed base benefits.
                        </p>
                      </span>
                    )
                  }
                ]}
              />
            </GridItem>
          </GridContainer>
        {/*</div>*/}
      </div>
    );
  }
}

export default withStyles(portfolioStyle)(PortfolioSection);