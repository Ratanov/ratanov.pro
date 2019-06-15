import { container, title } from "assets/jss/material-kit-react.jsx";

const workStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container
  },
  section: {
    padding: "42px 0"
  },
  title: {
    ...title,
    marginBottom: "50px",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center"
  },
  description: {
    color: "#999",
    textAlign: "center"
  },
  textCenter: {
    textAlign: "center"
  }
};

export default workStyle;
