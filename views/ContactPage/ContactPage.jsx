import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import contactPageStyle from "assets/jss/material-kit-react/views/contactPageStyle.jsx";

import image from "assets/img/bg7.jpg";

import ScrollToTopOnMount from "components/ScrollToTop/ScrollToTop.jsx";
import { translate } from "react-i18next";

class ContactPage extends React.Component {
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
              <GridItem xs={12} sm={12} md={7}>
                <Card className={classes[this.state.cardAnimaton]+" get-in-touch"}>
                  <h1>{t('ContactPage Title')}</h1>
                  <br />
                  <b>{t('Phone')}</b>
                  <p>+7 960 087 87 08</p>
                  <br />
                  <b>{t('Email')}</b>
                  <p>79600878708@yandex.ru</p>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={5}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <form className={classes.form}>
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <h4>{t('ContactPage WriteToUs')}</h4>
                      {/*<div className={classes.socialLine}>*/}
                        {/*<Button*/}
                          {/*justIcon*/}
                          {/*href="#"*/}
                          {/*color="transparent"*/}
                          {/*onClick={e => e.preventDefault()}*/}
                        {/*>*/}
                          {/*<i className={"fab fa-facebook"} />*/}
                        {/*</Button>*/}
                      {/*</div>*/}
                    </CardHeader>
                    <CardBody className="contactInput">
                      <CustomInput
                        labelText={t('Name')}
                        id="name"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText={t('Email')}
                        id="email"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "email",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Email className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText={t('Message')}
                        id="message"
                        formControlProps={{
                          fullWidth: true,
                          className: classes.textArea
                        }}
                        inputProps={{
                          multiline: true,
                          rows: 5
                        }}
                      />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button color="primary" size="lg">{t('Send')}</Button>
                    </CardFooter>
                  </form>
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

export default withStyles(contactPageStyle)(translate("translations")(ContactPage));
