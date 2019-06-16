import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { PhoneInTalk } from "@material-ui/icons";

// core components
import Button from "components/CustomButtons/Button.jsx";
import OrderButton from "components/Header/OrderButton.jsx";
import Languages from "components/Header/Languages.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {

  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem + " mr-1"}>
        <Languages />
      </ListItem>
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
      <ListItem className={classes.listItem + " mr-1"}>
        <Link to="/contact" className={classes.navLink}>Контакты</Link>
      </ListItem>
      <ListItem className={classes.listItem + " mr-2"}>
        <OrderButton />
      </ListItem>
      <ListItem className={classes.listItem+" desktop-d-none"}>
        <a className={classes.telNavLink} href="tel:+7600878708">
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            Позвонить&nbsp;
            <PhoneInTalk className={classes.iconCall} />
          </Button>
        </a>
      </ListItem>
      <ListItem className={classes.listItem+" mobile-d-none"}>
        <Tooltip
          id="phoneNumber"
          title="+7***"
          placement={window.innerWidth > 959 ? "bottom" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="#"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fa fa-phone m-0"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="whatsapp"
          title="Написать в WhatsApp"
          placement={window.innerWidth > 959 ? "bottom" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="#"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-whatsapp m-0"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="vk"
          title="Подписывайся в Вконтакте"
          placement={window.innerWidth > 959 ? "bottom" : "left"}
          classes={{ tooltip: classes.tooltip }}
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
          id="instagram-facebook"
          title="Подписывайся в фейсбуке"
          placement={window.innerWidth > 959 ? "bottom" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/ratanov.pro"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook m-0"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Подписывайся в инстаграме"
          placement={window.innerWidth > 959 ? "bottom" : "left"}
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
          {/*id="instagram-twitter"*/}
          {/*title="Подписывайся в твиттере"*/}
          {/*placement={window.innerWidth > 959 ? "top" : "left"}*/}
          {/*classes={{ tooltip: classes.tooltip }}*/}
        {/*>*/}
          {/*<Button*/}
            {/*href="https://twitter.com/RatanovPro"*/}
            {/*target="_blank"*/}
            {/*color="transparent"*/}
            {/*className={classes.navLink}*/}
          {/*>*/}
            {/*<i className={classes.socialIcons + " fab fa-twitter m-0"} />*/}
          {/*</Button>*/}
        {/*</Tooltip>*/}
      {/*</ListItem>*/}
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
