import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import { translate } from "react-i18next";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import workStyle from "assets/jss/material-kit-react/views/homePageSections/workStyle.jsx";

function MultipleSelect( { ...props } ) {
  const [simpleSelect, setSimpleSelect] = React.useState("");
  const [multipleSelect, setMultipleSelect] = React.useState([]);
  const handleSimple = event => {
    setSimpleSelect(event.target.value);
  };
  const handleMultiple = event => {
    setMultipleSelect(event.target.value);
  };
  const { classes } = props;
  return (
    <div>
      <div id="select">
        <FormControl fullWidth className={classes.selectFormControl}>
          <InputLabel
            htmlFor="multiple-select"
            className={classes.selectLabel}
          >
            Multiple Select
          </InputLabel>
          <Select
            multiple
            value={multipleSelect}
            onChange={handleMultiple}
            MenuProps={{
              className: classes.selectMenu,
              classes: { paper: classes.selectPaper }
            }}
            classes={{ select: classes.select }}
            inputProps={{
              name: "multipleSelect",
              id: "multiple-select"
            }}
          >
            <MenuItem
              disabled
              classes={{
                root: classes.selectMenuItem
              }}
            >
              Multiple Select
            </MenuItem>
            <MenuItem
              classes={{
                root: classes.selectMenuItem,
                selected: classes.selectMenuItemSelectedMultiple
              }}
              value="2"
            >
              Paris
            </MenuItem>
            <MenuItem
              classes={{
                root: classes.selectMenuItem,
                selected: classes.selectMenuItemSelectedMultiple
              }}
              value="3"
            >
              Bucharest
            </MenuItem>
            <MenuItem
              classes={{
                root: classes.selectMenuItem,
                selected: classes.selectMenuItemSelectedMultiple
              }}
              value="4"
            >
              Rome
            </MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  )
}

export default withStyles(workStyle)(MultipleSelect);