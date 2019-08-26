import { container, title } from "assets/jss/material-kit-react.jsx";

const homePageStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    height: "80%",
    ...container
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    margin: ".88rem 0",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: ".88rem 0 0"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0",
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
    // position: "absolute",
    // bottom: "0",
    // left: "50%",
    paddingBottom: "20px",
    color: "white",
    cursor: "pointer",
    "&:hover, &:focus": {
      color: "white",
    }
  },
  btnScrollDown: {
    padding: "20px 15px"
  },
  containerBrand: {
    margin: "auto auto 0 0"
  },
  containerScrollDown: {
    margin: "auto auto 0 auto"
  }
};

export default homePageStyle;
