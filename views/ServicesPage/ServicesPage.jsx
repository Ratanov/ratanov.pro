import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";

import servicesPageStyle from "assets/jss/material-kit-react/views/servicesPageStyle.jsx";

import image from "assets/img/bg7.jpg";

import ScrollToTopOnMount from "components/ScrollToTop/ScrollToTop.jsx";
import { translate } from "react-i18next";

class ServicesPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden"
    };
  }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }
  render() {
    const { classes, t, ...rest } = this.props;
    return (
      <div>
        <ScrollToTopOnMount />
        <Header
          absolute
          color="transparent"
          brand="RATANOV.PRO"
          rightLinks={<HeaderLinks />}
          {...rest}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              {/*<GridItem xs={12} sm={12} md={7}>*/}
                {/*<Card className={classes[this.state.cardAnimaton]+" get-in-touch"}>*/}
                  {/*<h1>{t('ServicesPage Title')}</h1>*/}
                  {/*<br />*/}
                  {/*<b>{t('Phone')}</b>*/}
                  {/*<p>+7 960 087 87 08</p>*/}
                  {/*<br />*/}
                  {/*<b>{t('Email')}</b>*/}
                  {/*<p>79600878708@yandex.ru</p>*/}
                {/*</Card>*/}
              {/*</GridItem>*/}
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]+" cardService"}>
                  <CardHeader color="primary" className={classes.cardHeader+" cardServiceHeader"}>
                    <h3>{t('Service1')}</h3>
                  </CardHeader>
                  <CardBody className="contactInput">
                    <p>{t('Service1Description')}</p>
                  </CardBody>
                  {/*<CardFooter className={classes.cardFooter}>*/}
                    {/*<Button color="primary" size="lg">{t('Send')}</Button>*/}
                  {/*</CardFooter>*/}
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]+" cardService"}>
                  <CardHeader color="primary" className={classes.cardHeader+" cardServiceHeader"}>
                    <h3>{t('Service2')}</h3>
                  </CardHeader>
                  <CardBody className="contactInput">
                    <p>{t('Service2Description')}</p>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]+" cardService"}>
                  <CardHeader color="primary" className={classes.cardHeader+" cardServiceHeader"}>
                    <h3>{t('Service3')}</h3>
                  </CardHeader>
                  <CardBody className="contactInput">
                    <p>{t('Service3Description')}</p>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]+" cardService"}>
                  <CardHeader color="primary" className={classes.cardHeader+" cardServiceHeader"}>
                    <h3>{t('Service4')}</h3>
                  </CardHeader>
                  <CardBody className="contactInput">
                    <p>{t('Service4Description')}</p>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]+" cardService"}>
                  <CardHeader color="primary" className={classes.cardHeader+" cardServiceHeader"}>
                    <h3>{t('Service5')}</h3>
                  </CardHeader>
                  <CardBody className="contactInput">
                    <p>{t('Service5Description')}</p>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]+" cardService"}>
                  <CardHeader color="primary" className={classes.cardHeader+" cardServiceHeader"}>
                    <h3>{t('Service6')}</h3>
                  </CardHeader>
                  <CardBody className="contactInput">
                    <p>{t('Service6Description')}</p>
                  </CardBody>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          <Footer whiteFont />
        </div>
      </div>
    );
  }
}

export default withStyles(servicesPageStyle)(translate("translations")(ServicesPage));
