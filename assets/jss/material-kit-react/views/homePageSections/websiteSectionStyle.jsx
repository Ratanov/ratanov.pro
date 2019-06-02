import { conatinerFluid, title } from "assets/jss/material-kit-react.jsx";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.jsx";

const websiteSectionStyle = {
  section: {
    padding: "0"
  },
  container: {
    ...conatinerFluid,
    textAlign: "center !important"
  },
  ...imagesStyle,
  link: {
    textDecoration: "none",
    cursor: "pointer"
  },
  title: {
    ...title,
    marginBottom: "50px",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center"
  },
  portfolioTitle: {
    width: "max-content",
    position: "absolute",
    top: "-15px",
    left: "50%",
    transform: "translate(-50%, 0)",
    padding: "5px 15px",
    color: "#ffffff",
    borderRadius: "3px",
    margin: "0",
    background: "linear-gradient(60deg, #ab47bc, #8e24aa)",
    boxShadow: "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"
  }
};

export default websiteSectionStyle;