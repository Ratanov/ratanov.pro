import { container, title } from "assets/jss/material-kit-react.jsx";

const homePageStyle = theme => ({
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    ...container
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    margin: "0 0 1.25rem",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none"
  },
  subtitle: {
    fontSize: "1.25rem",
    maxWidth: "500px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem"
    }
  },
  brandDescription: {
    margin: "1.25rem 0"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "0px 30px 0",
    borderRadius: "8px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  mainRaised2: {
    margin: "0 30px 0"
  },
  mainRaised3: {
    margin: "0 30px 0",
    borderRadius: "8px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  scrolldown: {
    cursor: "pointer",
  },
  btnScrollDown: {
    padding: "15px",
    margin: "0",
    color: "rgba(0,0,0,.5);",
    "&:hover, &:focus": {
      color: "rgba(0,0,0,.8);"
    }
  },
  containerBrand: {
    margin: "auto auto auto 0"
  },
  containerScrollDown: {
    position: "absolute",
    bottom: "5%",
    marginLeft: "auto",
    marginRight: "auto",
    left: "0",
    right: "0"
  }
});

export default homePageStyle;
