import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";

import languagesStyle from "assets/jss/material-kit-react/components/languagesStyle.jsx";

import { translate } from "react-i18next";

class Languages extends React.Component {
  state = {
    value: "ru"
    // value: this.state.value
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
      <div className="customDropdownLanguage">
        {/*<CustomDropdown*/}
          {/*left*/}
          {/*hoverColor="primary"*/}
          {/*// dropdownHeader="Language"*/}
          {/*buttonIcon="language"*/}
          {/*buttonProps={{*/}
            {/*className: classes.navLink,*/}
            {/*color: "transparent"*/}
          {/*}}*/}
          {/*dropdownList={[*/}
            {/*<FormControl*/}
              {/*component="fieldset"*/}
              {/*className={classes.formControl}*/}
            {/*>*/}
              {/*<RadioGroup*/}
                {/*aria-label="language"*/}
                {/*name="language"*/}
                {/*className={classes.group}*/}
                {/*value={this.state.value}*/}
                {/*onChange={this.handleChange}*/}
              {/*>*/}
                {/*<FormControlLabel*/}
                  {/*value="ru"*/}
                  {/*control={<Radio />}*/}
                  {/*label="Russian"*/}
                {/*/>*/}
              {/*</RadioGroup>*/}
            {/*</FormControl>,*/}
            {/*{ divider: true },*/}
            {/*<FormControl*/}
              {/*component="fieldset"*/}
              {/*className={classes.formControl}*/}
            {/*>*/}
              {/*<RadioGroup*/}
                {/*aria-label="language"*/}
                {/*name="language"*/}
                {/*className={classes.group}*/}
                {/*value={this.state.value}*/}
                {/*onChange={this.handleChange}*/}
              {/*>*/}
                {/*<FormControlLabel*/}
                  {/*value="en"*/}
                  {/*control={<Radio />}*/}
                  {/*label="English"*/}
                {/*/>*/}
              {/*</RadioGroup>*/}
            {/*</FormControl>*/}
          {/*]}*/}
        {/*/>*/}
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
              label="Рус"
            />
          </RadioGroup>
        </FormControl>,
        {/*{ divider: true },*/}
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
              value="en"
              control={<Radio />}
              label="Eng"
            />
          </RadioGroup>
        </FormControl>
      </div>
    );
  }
}

export default withStyles(languagesStyle)(translate("translations")(Languages));
