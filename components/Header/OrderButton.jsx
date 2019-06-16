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

function Transition(props) {
  return <Slide direction="left" {...props} />;
}

class OrderButton extends React.Component {
  constructor(props) {
    super(props);
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
  handleClickButton(state) {
    this.setState({
      [state]: true
    });
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
          Заказать&nbsp;
          <Star className={classes.iconOrder+" iconOrderStar"} />
          <StarBorder className={"iconOrderStarHover"} />
        </Button>
        <Dialog
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
            <h4 className={classes.modalTitle}>Новая заявка</h4>
          </DialogTitle>
          <DialogContent
            id="classic-modal-slide-description"
            className={classes.modalBody}
          >
            <form>
              <GridContainer className="contactInput">
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Имя"
                    id="name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Email"
                    id="email"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Телефон"
                    id="phone"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Сообщение"
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
                    Обращаем ваше внимание, что заявка будет рассмотрена в рабочие часы студии.<br />
                    Если вы оставили заявку в нерабочее время, она будет обработана в начале следующего рабочего дня.
                    По возможности, пожалуйста, указывайте желаемое время для связи с вами.
                  </p>
                </GridItem>
              </GridContainer>
            </form>
          </DialogContent>
          <DialogActions className={classes.modalFooter}>
            <Button color="transparent" simple>
              Отправить
            </Button>
            <Button
              onClick={() => this.handleClose("classicModal")}
              color="danger"
              simple
            >
              Закрыть
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(orderButtonStyle)(OrderButton);
