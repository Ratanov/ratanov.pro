import { container, title } from "assets/jss/material-kit-react.jsx";

const workStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container
  },
  section: {
    padding: "70px 15px"
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
  },
  textArea: {
    marginRight: "15px",
    marginLeft: "15px"
  }
};

export default workStyle;
