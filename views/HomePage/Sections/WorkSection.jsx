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

class WorkSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section} name="scroll-to-order">
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Отправьте заявку, чтобы создать крутой проект</h2>
            <h4 className={classes.description}>
              Заполните поля ниже и мы свяжемся с Вами как можно быстрее.
            </h4>
            <form>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Имя"
                    id="name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Email"
                    id="email"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Телефон"
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
              </GridContainer>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={12}
                  className={classes.textCenter}
                >
                  <Button color="primary">Отправить</Button>
                </GridItem>
              </GridContainer>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(workStyle)(WorkSection);
