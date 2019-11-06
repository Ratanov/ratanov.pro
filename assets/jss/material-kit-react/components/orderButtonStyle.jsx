import { container, title } from "assets/jss/material-kit-react.jsx";

import modalStyle from "assets/jss/material-kit-react/modalStyle.jsx";

const orderButtonStyle = theme => ({
  section: {
    padding: "70px 0 0"
  },
  container,
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  navLink: {
    color: "inherit",
    position: "relative",
    padding: "0.9375rem",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    cursor: "pointer",
    "&:hover,&:focus": {
      color: "inherit",
      background: "rgba(200, 200, 200, 0.2)"
    },
    "&:visited": {
      // color: "red"
    },
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 30px)",
      marginLeft: "15px",
      marginBottom: "8px",
      marginTop: "8px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start"
      }
    }
  },
  iconOrder: {
    width: "20px",
    height: "20px",
    marginRight: "3px",
    fill: "#daa520"
  },
  ...modalStyle,
  modalHeader: {
    paddingLeft: "15px",
    paddingRight: "15px",
    paddingBottom: "10px"
  },
  modalBody: {
    paddingLeft: "15px",
    paddingRight: "15px",
    paddingBottom: "0"
  },
  modalFooter: {
    paddingLeft: "15px",
    paddingRight: "15px"
  },
  label: {
    color: "rgba(0, 0, 0, 0.26)",
    cursor: "pointer",
    display: "inline-flex",
    fontSize: "14px",
    transition: "0.3s ease all",
    lineHeight: "1.428571429",
    fontWeight: "400",
    paddingLeft: "0"
  },
});

export default orderButtonStyle;
