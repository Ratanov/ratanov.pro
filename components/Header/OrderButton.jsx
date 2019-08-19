import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
// @material-ui/icons
import { Star, StarBorder, Close } from "@material-ui/icons";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import orderButtonStyle from "assets/jss/material-kit-react/components/orderButtonStyle.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import { Trans } from 'react-i18next';
import { sendFormEmail } from "../../utils";

function Transition(props) {
  return <Slide direction="left" {...props} />;
}

class OrderButton extends React.Component {
  constructor(props) {
    super(props);

    this.form = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      classicModal: false
    };
  }
  handleClickOpen(modal) {
    var x = [];
    x[modal] = true;
    this.setState(x);
  }
  handleClose(modal) {
    var x = [];
    x[modal] = false;
    this.setState(x);
  }
  handleSubmit(event) {
    event.preventDefault();
    sendFormEmail(this.form.current);
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button
          color="transparent"
          // block
          className={classes.navLink+" buttonOrder"}
          onClick={() => this.handleClickOpen("classicModal")}
        >
          <Trans>Order</Trans>&nbsp;
          <Star className={classes.iconOrder+" iconOrderStar"} />
          <StarBorder className={"iconOrderStarHover"} />
        </Button>
        <Dialog
          fullScreen
          classes={{
            root: classes.center,
            paper: classes.modal,
          }}
          open={this.state.classicModal}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => this.handleClose("classicModal")}
          aria-labelledby="classic-modal-slide-title"
          aria-describedby="classic-modal-slide-description"
        >
          <form ref={this.form} onSubmit={this.handleSubmit}>
            <DialogTitle
              id="classic-modal-slide-title"
              disableTypography
              className={classes.modalHeader}
            >
              <IconButton
                className={classes.modalCloseButton}
                key="close"
                aria-label="Close"
                color="inherit"
                onClick={() => this.handleClose("classicModal")}
              >
                <Close className={classes.modalClose} />
              </IconButton>
              <h4 className={classes.modalTitle}><Trans>OrderModal Title</Trans></h4>
            </DialogTitle>
            <DialogContent
              id="classic-modal-slide-description"
              className={classes.modalBody}
            >
            <GridContainer className="contactInput">
              <GridItem xs={12} sm={4} md={4}>
                <CustomInput
                  inputProps={{
                    name:"name"
                  }}
                  labelText={<Trans>Name</Trans>}
                  id="name"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={4} md={4}>
                <CustomInput
                  inputProps={{
                    name:"email"
                  }}
                  labelText={<Trans>Email</Trans>}
                  id="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={4} md={4}>
                <CustomInput
                  inputProps={{
                    name:"phone"
                  }}
                  labelText={<Trans>Phone</Trans>}
                  id="phone"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  inputProps={{
                    name:"message"
                  }}
                  labelText={<Trans>Message</Trans>}
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
              <GridItem xs={12} sm={12} md={12}>
                <p>
                  <Trans>OrderModal Description1</Trans><br />
                  <Trans>OrderModal Description2</Trans>
                </p>
              </GridItem>
            </GridContainer>
            </DialogContent>
            <DialogActions className={classes.modalFooter}>
              <Button type="submit" color="transparent" simple>
                <Trans>Send</Trans>
              </Button>
              <Button
                onClick={() => this.handleClose("classicModal")}
                color="danger"
                simple
              >
                <Trans>Close</Trans>
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(orderButtonStyle)(OrderButton);
