import { cardTitle, title } from "assets/jss/material-kit-react.jsx";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.jsx";
import tooltipsStyle from "assets/jss/material-kit-react/tooltipsStyle.jsx";

const teamStyle = {
  section: {
    padding: "50px 0",
    textAlign: "center"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  ...imagesStyle,
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  cardTitle: {
    ...cardTitle,
    marginTop: "2rem"
  },
  smallTitle: {
    color: "#6c757d"
  },
  description: {
    color: "#767676",
    fontSize: "16px"
  },
  justifyCenter: {
    justifyContent: "center !important"
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#767676"
  },
  margin5: {
    margin: "5px"
  },
  ...tooltipsStyle,
};

export default teamStyle;
