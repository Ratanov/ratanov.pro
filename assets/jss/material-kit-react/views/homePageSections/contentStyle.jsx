import { container, title, blackColor, hexToRgb } from "assets/jss/material-kit-react.jsx";

const contentStyle = theme => ({
  container,
  section: {
    backgroundPosition: "50%",
    backgroundSize: "cover",
    padding: "30px 0px 50px"
  },
  sectionDescription: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: "0",
    paddingRight: "0",
    "& p": {
      fontSize: "16px"
    }
  },
  title: {
    ...title,
    marginTop: "30px",
    marginBottom: "5px",
    "& + $description": {
      marginBottom: "10px",
      marginTop: "0px"
    }
  },
  description: {
    color: "#767676;",
    marginTop: "35px",
    marginBottom: "15px"
  },
  imageContainer: {
    maxWidth: "900px",
    position: "relative"
  },
  ipadImg: {
    width: "100%"
  },
  areaImg: {
    height: "300px",
    width: "250px",
    zIndex: 2,
    top: "10%",
    left: "60%",
    boxShadow:
      "0 8px 10px 1px rgba(" +
      hexToRgb(blackColor) +
      ", 0.14), 0 3px 14px 2px rgba(" +
      hexToRgb(blackColor) +
      ", 0.12), 0 5px 5px -3px rgba(" +
      hexToRgb(blackColor) +
      ", 0.2)",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "130px",
      maxHeight: "170px"
    }
  },
  infoImg: {
    height: "200px",
    width: "300px",
    top: "50%",
    left: "0%",
    boxShadow:
      "0 8px 10px 1px rgba(" +
      hexToRgb(blackColor) +
      ", 0.14), 0 3px 14px 2px rgba(" +
      hexToRgb(blackColor) +
      ", 0.12), 0 5px 5px -3px rgba(" +
      hexToRgb(blackColor) +
      ", 0.2)",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "170px",
      maxHeight: "120px"
    }
  },
  animeInfoImg: {
    top: "50%",
    left: "0%",
    position: "absolute"
  },
  animeAreaImg: {
    top: "10%",
    left: "60%",
    position: "absolute"
  }
});

export default contentStyle;
