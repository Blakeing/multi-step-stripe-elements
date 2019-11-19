import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from "@material-ui/core/";
import Link from "@material-ui/core/Link";
import DraftsIcon from "@material-ui/icons/Drafts";
import HomeIcon from "@material-ui/icons/Home";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useHeaderStyles } from "./header.styles";

const Navbar = () => {
  const classes = useHeaderStyles();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <div className={classes.sidebar} />
      <Divider />
      <List component="nav" aria-label="Main mailbox folders">
        <ListItem button component={RouterLink} to="/">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={RouterLink} to="/about">
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button component={RouterLink} to="/checkout">
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Checkout" />
        </ListItem>
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer("left", true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
            {sideList("left")}
          </Drawer>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            <Link
              component={RouterLink}
              to="/"
              style={{ textDecoration: "none" }}
            >
              Input Ninja
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
export default Navbar;
