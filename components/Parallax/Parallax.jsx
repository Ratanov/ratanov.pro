import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import parallaxStyle from "assets/jss/material-kit-react/components/parallaxStyle.jsx";

class Parallax extends React.Component {
  constructor(props) {
    super(props);
    var windowScrollTop = window.pageYOffset / 3;
    this.state = {
      transform: "translate3d(0," + windowScrollTop + "px,0)"
    };
    this.resetTransform = this.resetTransform.bind(this);
  }
  componentDidMount() {
    var windowScrollTop = window.pageYOffset / 3;
    this.setState({
      transform: "translate3d(0," + windowScrollTop + "px,0)"
    });
    window.addEventListener("scroll", this.resetTransform);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.resetTransform);
  }
  resetTransform() {
    var windowScrollTop = window.pageYOffset / 3;
    this.setState({
      transform: "translate3d(0," + windowScrollTop + "px,0)"
    });
  }
  render() {
    const {
      classes,
      filter,
      className,
      children,
      style,
      image,
      small,
      big,
      smallprofile,
      smallabout
    } = this.props;
    const parallaxClasses = classNames({
      [classes.parallax]: true,
      [classes.filter]: filter,
      [classes.small]: small,
      [classes.big]: big,
      [classes.smallprofile]: smallprofile,
      [classes.smallabout]: smallabout,
      [className]: className !== undefined
    });
    return (
      <div
        className={parallaxClasses+" dis-solar-syst"}
        style={{
          ...style,
          // backgroundImage: "url(" + image + ")",
          ...this.state
        }}
        ref="parallax"
      >
        {children}
        {/*<div className="waveWrapper waveAnimation">*/}
          {/*<div className={"waveWrapperInner"}>*/}
            {/*<div className=" bgTop">*/}
              {/*<div className="wave waveTop"*/}
                   {/*style={{backgroundImage: "url('https://ratanov.pro/img/waves/wave-top.png')"}}></div>*/}
            {/*</div>*/}
            {/*<div className=" bgMiddle">*/}
              {/*<div className="wave waveMiddle"*/}
                   {/*style={{backgroundImage: "url('https://ratanov.pro/img/waves/wave-mid.png')"}}></div>*/}
            {/*</div>*/}
            {/*<div className=" bgBottom">*/}
              {/*<div className="wave waveBottom"*/}
                   {/*style={{backgroundImage: "url('https://ratanov.pro/img/waves/wave-bot.png')"}}></div>*/}
            {/*</div>*/}
          {/*</div>*/}
        {/*</div>*/}
        <div className="solar-syst">
          <div className="sun"></div>
          <div className="mercury"></div>
          <div className="venus"></div>
          <div className="earth"></div>
          <div className="mars"></div>
          <div className="jupiter"></div>
          <div className="saturn"></div>
          <div className="uranus"></div>
          <div className="neptune"></div>
          <div className="pluto"></div>
          <div className="asteroids-belt"></div>
        </div>
      </div>
    );
  }
}

Parallax.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  filter: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.string,
  image: PropTypes.string
};

export default withStyles(parallaxStyle)(Parallax);