
const languagesStyle = theme => ({
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
  formControl: {

  },
  group: {
    display: "flex",
    flexDirection: "row"
  },
  customDropdownIcon: {
    fontSize: "20px"
  }
});

export default languagesStyle;
