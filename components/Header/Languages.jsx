import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

import languagesStyle from "assets/jss/material-kit-react/components/languagesStyle.jsx";

import { translate } from "react-i18next";

class Languages extends React.Component {
  state = {
    value: "ru"
  };

  handleChange = event => {
    console.log("selected val is ", event.target.value);
    let newlang = event.target.value;
    this.setState(prevState => ({ value: newlang }));
    console.log("state value is", newlang);
    this.props.i18n.changeLanguage(newlang);
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <FormControl
          component="fieldset"
          className={classes.formControl}
        >
          <RadioGroup
            aria-label="language"
            name="language"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
          >
            <FormControlLabel
              value="ru"
              control={<Radio />}
              label="Russian"
            />
            <FormControlLabel
              value="en"
              control={<Radio />}
              label="English"
            />
          </RadioGroup>
        </FormControl>
      </div>
    );
  }
}

export default withStyles(languagesStyle)(translate("translations")(Languages));
