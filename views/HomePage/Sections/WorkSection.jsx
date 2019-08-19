import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

import workStyle from "assets/jss/material-kit-react/views/homePageSections/workStyle.jsx";
import { sendFormEmail } from "../../../utils";

import { translate } from "react-i18next";

class WorkSection extends React.Component {
  constructor(props) {
    super(props);

    this.form = React.createRef();

    this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      isVerified: false
    };
  }

  recaptchaLoaded() {
    console.log('capcha successfully loaded');
  }

  verifyCallback(response) {
    if (response) {
      this.setState({
        isVerified: true
      })
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    sendFormEmail(this.form.current);
    // if (this.state.isVerified) {
    //   sendFormEmail(this.form.current);
    // } else {
    //   alert('Please verify that you are a human!')
    // }
  }

  render() {
    const { classes, t } = this.props;
    return (
      <div className={classes.section} name="scroll-to-order">
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>{t('WorkSection Title')}</h2>
            <h4 className={classes.description}>{t('WorkSection Description')}</h4>
            <form ref={this.form} onSubmit={this.handleSubmit}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    inputProps={{
                      name:"name"
                    }}
                    labelText={t('Name')}
                    id="name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    inputProps={{
                      name:"email"
                    }}
                    labelText={t('Email')}
                    id="email"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    inputProps={{
                      name:"phone"
                    }}
                    labelText={t('Phone')}
                    id="phone"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    inputProps={{
                      name:"message"
                    }}
                    labelText={t('Message')}
                    id="message"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5
                    }}
                  />
                </GridItem>
              </GridContainer>
              {/*<GridContainer justify="center">*/}
                {/*<GridItem xs={12} sm={12} md={12} className={classes.captcha}>*/}
                  {/*<Recaptcha*/}
                    {/*sitekey="6LdKdK0UAAAAAM_v3X0sf8lMHmoHYSYfprVUOWQV"*/}
                    {/*render="explicit"*/}
                    {/*onloadCallback={this.recaptchaLoaded}*/}
                    {/*verifyCallback={this.verifyCallback}*/}
                  {/*/>*/}
                {/*</GridItem>*/}
              {/*</GridContainer>*/}
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={12} className={classes.textCenter}>
                  <Button type="submit" color="primary">{t('Send')}</Button>
                </GridItem>
              </GridContainer>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(workStyle)(translate("translations")(WorkSection));
