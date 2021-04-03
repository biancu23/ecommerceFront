import React, { useEffect, useState } from "react"
import { fade, makeStyles } from "@material-ui/core/styles"
import Search from "./Search"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import Badge from "@material-ui/core/Badge"
import MenuItem from "@material-ui/core/MenuItem"
import Menu from "@material-ui/core/Menu"
import MenuIcon from "@material-ui/icons/Menu"
import AccountCircle from "@material-ui/icons/AccountCircle"
import MailIcon from "@material-ui/icons/Mail"
import NotificationsIcon from "@material-ui/icons/Notifications"
import MoreIcon from "@material-ui/icons/MoreVert"

import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"

import { Link } from "gatsby"
import {
  AccountBalanceRounded,
  FastfoodRounded,
  Favorite,
  FitnessCenterRounded,
  HelpRounded,
  ImportContactsRounded,
  ShoppingCartRounded,
  StoreRounded,
} from "@material-ui/icons"

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "30ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  link: {
    textDecoration: "none",
  },
}))

const Navbar = () => {
  let cartQty = 0

  if (typeof window !== `undefined`) {
    cartQty = window.Snipcart.store.getState().cart.items.count
  }
  
  const classes = useStyles()
  const [cartItems, setCartItems] = useState(cartQty)
  const [state, setState] = useState(false)

  

  
  

useEffect(() => {

  if (window.Snipcart) {
    
    setCartItems(cartQty)
}

}, [cartQty])


  const toggleDrawer = () => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }
    setState(!state)
  }

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget)
  }



  //Mobile menu
  const mobileMenuId = "primary-search-account-menu-mobile"
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem>
        <IconButton>
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  )

  //Lateral Drawer
  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer()}
      onKeyDown={toggleDrawer()}
    >
      <List>
        <Link
          to="/products"
          className={classes.link}
          style={{ color: "inherit" }}
        >
          <ListItem button>
            <ListItemIcon>
              <StoreRounded />
            </ListItemIcon>
            <ListItemText primary="Products" color="primary" />
          </ListItem>
        </Link>
        <Link to="/blog" className={classes.link} style={{ color: "inherit" }}>
          <ListItem button>
            <ListItemIcon>
              <ImportContactsRounded />
            </ListItemIcon>
            <ListItemText primary="Blog" color="primary" />
          </ListItem>
        </Link>
        <Link
          to="/training"
          className={classes.link}
          style={{ color: "inherit" }}
        >
          <ListItem button>
            <ListItemIcon>
              <FitnessCenterRounded />
            </ListItemIcon>
            <ListItemText primary="Training" color="primary" />
          </ListItem>
        </Link>
        <Link
          to="/nutrition"
          className={classes.link}
          style={{ color: "inherit" }}
        >
          <ListItem button>
            <ListItemIcon>
              <FastfoodRounded />
            </ListItemIcon>
            <ListItemText primary="Nutrition" color="primary" />
          </ListItem>
        </Link>
        <Link to="/help" className={classes.link} style={{ color: "inherit" }}>
          <ListItem button>
            <ListItemIcon>
              <HelpRounded />
            </ListItemIcon>
            <ListItemText primary="Help" color="primary" />
          </ListItem>
        </Link>
        <Link to="/about" className={classes.link} style={{ color: "inherit" }}>
          <ListItem button>
            <ListItemIcon>
              <AccountBalanceRounded />
            </ListItemIcon>
            <ListItemText primary="About" color="primary" />
          </ListItem>
        </Link>
      </List>
    </div>
  )

  return (
    <div className={classes.grow}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            aria-label="open drawer"
            color="inherit"
            onClick={toggleDrawer()}
          >
            <MenuIcon />
            <Drawer open={state} onClose={toggleDrawer()}>
              {list()}
            </Drawer>
          </IconButton>
          <Link to="/" className={classes.link}>
            <Typography
              className={classes.title}
              variant="h5"
              noWrap
              color="primary"
            >
              FiT eCommerce
            </Typography>
          </Link>
          <div className={classes.search}>
            <Search />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge color="secondary">
                <HelpRounded color="primary" fontSize="large" />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Link className="snipcart-checkout">
                <Badge badgeContent={cartItems} color="secondary">
                  <ShoppingCartRounded color="primary" fontSize="large" />
                </Badge>
              </Link>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge color="secondary">
                <Favorite color="error" fontSize="large" />
              </Badge>
            </IconButton>
            <IconButton>
              <Link to="/login" className={classes.link}>
                <AccountCircle color="primary" fontSize="large" />
              </Link>
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  )
}

export default Navbar
