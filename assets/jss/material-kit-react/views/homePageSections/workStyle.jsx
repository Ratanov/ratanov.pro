import { container, title } from "assets/jss/material-kit-react.jsx";

const workStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container
  },
  section: {
    padding: "30px 0 50px"
  },
  title: {
    ...title,
    marginBottom: "30px",
    marginTop: "0",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center"
  },
  description: {
    color: "#767676",
    textAlign: "center"
  },
  textCenter: {
    textAlign: "center"
  },
  captcha: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "10px"
  }
};

export default workStyle;
