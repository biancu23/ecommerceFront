import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"

import { Link } from "gatsby"
import { Grid } from "@material-ui/core"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import YouTubeIcon from "@material-ui/icons/YouTube"
import EmailIcon from "@material-ui/icons/Email"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: theme.palette.primary.main,
  },
  menuLink: {
    marginRight: theme.spacing(1),
  },
  appBar: {
    top: "auto",
    bottom: 0,
  },
  logo: {
    width: "100%",
    borderRadius: "50%",
    padding: theme.spacing(1),
  },
}))

const Footer = () => {
  function ListItemLink(props) {
    return <ListItem button component={Link} {...props} />
  }
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid
        container
        style={{ paddingTop: "2rem" }}
        spacing={2}
        justify="space-around"
      >
        <Grid item xs={12} md={2}>
          <img
            src="https://dummyimage.com/400x400/000/fff"
            alt="logo"
            className={classes.logo}
          />
          <Grid container justify="center">
              <Typography variant="h3">
          <FacebookIcon  color="secondary" fontSize="inherit"/>
          <InstagramIcon htmlColor="#833AB4" fontSize="inherit"/>
          <YouTubeIcon htmlColor="red" fontSize="inherit"/>
          <EmailIcon htmlColor="#4FCE5D" fontSize="inherit"/>
          </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} md={2}>
          <Link to="/products" style={{textDecoration: "none"}}>
          <Typography variant="h5">Products</Typography>
          </Link>
          <List component="nav" aria-label="secondary mailbox folders">
            <ListItemLink to="/Products">
              <ListItemText primary="Protein" />
            </ListItemLink>
            <ListItemLink to="/Products">
              <ListItemText primary="Performance" />
            </ListItemLink>
            <ListItemLink to="/Products">
              <ListItemText primary="Recovery" />
            </ListItemLink>
            <ListItemLink to="/Products">
              <ListItemText primary="Weight Managment" />
            </ListItemLink>
          </List>
        </Grid>

        <Grid item xs={12} md={2}>
          <Typography variant="h5">Content</Typography>
          <List component="nav" aria-label="secondary mailbox folders">
            <ListItemLink to="/Products">
              <ListItemText primary="Blog" />
            </ListItemLink>
            <ListItemLink to="/Products">
              <ListItemText primary="Training" />
            </ListItemLink>
            <ListItemLink to="/Products">
              <ListItemText primary="Nutrition" />
            </ListItemLink>
          </List>
        </Grid>

        <Grid item xs={12} md={2}>
          <Typography variant="h5">Support</Typography>
          <List component="nav" aria-label="secondary mailbox folders">
            <ListItemLink to="/Products">
              <ListItemText primary="My Account" />
            </ListItemLink>
            <ListItemLink to="/Products">
              <ListItemText primary="Wish List" />
            </ListItemLink>
            <ListItemLink to="/Products">
              <ListItemText primary="Contact Us" />
            </ListItemLink>
            <ListItemLink to="/Products">
              <ListItemText primary="FAQ" />
            </ListItemLink>
          </List>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer
