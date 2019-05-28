import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {

  const { classes } = props;
  return (
    <List className={classes.list}>
      {/*<ListItem className={classes.listItem}>*/}
        {/*<CustomDropdown*/}
          {/*noLiPadding*/}
          {/*buttonText="Components"*/}
          {/*buttonProps={{*/}
            {/*className: classes.navLink,*/}
            {/*color: "transparent"*/}
          {/*}}*/}
          {/*buttonIcon={Apps}*/}
          {/*dropdownList={[*/}
            {/*<Link to="/" className={classes.dropdownLink}>*/}
              {/*All components*/}
            {/*</Link>,*/}
            {/*<a*/}
              {/*href="https://creativetimofficial.github.io/material-kit-react/#/documentation"*/}
              {/*target="_blank"*/}
              {/*className={classes.dropdownLink}*/}
            {/*>*/}
              {/*Documentation*/}
            {/*</a>*/}
          {/*]}*/}
        {/*/>*/}
      {/*</ListItem>*/}

        <ListItem className={classes.listItem + " mr-1"}>
          <Link to="/about" className={classes.navLink}>О нас</Link>
        </ListItem>

        <ListItem className={classes.listItem + " mr-1"}>
            <Button
                href="#"
                color="transparent"
                target="_self"
                className={classes.navLink}
            >
                Услуги
            </Button>
        </ListItem>
        <ListItem className={classes.listItem + " mr-3"}>
          <Link to="/contact" className={classes.navLink}>Контакты</Link>
        </ListItem>
      {/*<ListItem className={classes.listItem}>*/}
        {/*<Button*/}
          {/*href="#"*/}
          {/*color="transparent"*/}
          {/*target="_blank"*/}
          {/*className={classes.navLink}*/}
        {/*>*/}
          {/*<CloudDownload className={classes.icons} /> Скачать*/}
        {/*</Button>*/}
      {/*</ListItem>*/}
      <ListItem className={classes.listItem}>
        <Tooltip
          id="vk"
          title="Подписывайся в Вконтакте"
          placement={window.innerWidth > 959 ? "bottom" : "left"}
          classes={window.innerWidth > 959 ? { tooltip: classes.tooltip } : { tooltip: classes.tooltip + " d-none"}}
        >
          <Button
            href="https://vk.com/ratanovpro"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-vk m-0"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Подписывайся в твиттере"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/RatanovPro"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter m-0"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Подписывайся в инстаграме"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/ratanov.pro/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram m-0"} />
          </Button>
        </Tooltip>
      </ListItem>
      {/*<ListItem className={classes.listItem}>*/}
        {/*<Tooltip*/}
          {/*id="instagram-facebook"*/}
          {/*title="Подписывайся в фейсбуке"*/}
          {/*placement={window.innerWidth > 959 ? "top" : "left"}*/}
          {/*classes={{ tooltip: classes.tooltip }}*/}
        {/*>*/}
          {/*<Button*/}
            {/*color="transparent"*/}
            {/*href="https://www.facebook.com/ratanov.pro"*/}
            {/*target="_blank"*/}
            {/*className={classes.navLink}*/}
          {/*>*/}
            {/*<i className={classes.socialIcons + " fab fa-facebook m-0"} />*/}
          {/*</Button>*/}
        {/*</Tooltip>*/}
      {/*</ListItem>*/}
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
