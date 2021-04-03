import { Box, Button, Grid, Typography } from "@material-ui/core"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import BackgroundImage from "gatsby-background-image"
import { graphql, Link, useStaticQuery } from "gatsby"

const useStyles = makeStyles(theme => ({
  banner: {
    height: "85vh",
    position: "relative",
    clipPath: "polygon(0 0, 100% 0%, 100% 77%, 0 100%)",
    width: "100%",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },

  whiteText: {
    color: theme.palette.common.white,
    textAlign: "center",
    lineHeight: 1.75
  },
  whiteBtn: {
    color: theme.palette.common.black,
    backgroundColor: theme.palette.common.white,
    border: `2px solid ${theme.palette.common.black}`,
    textAlign: "center",
    marginTop: "1rem"
  },
}))

const Banner = () => {
  const classes = useStyles()

  const { image } = useStaticQuery(
    graphql`
      query {
        image: file(relativePath: { eq: "banner.jpg" }) {
          sharp: childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  return (
    <BackgroundImage
      className={classes.banner}
      fluid={image.sharp.fluid}
      fadeIn="soft"
    >
      <Box display="flex" width="100%" height="100%">
        <Grid container justify="center" alignItems="center" style={{marginBottom: "4rem"}}>
          <Grid item xs={8}>
            <Typography variant="h5" className={classes.whiteText}>
              SHOW THE WORLD WHAT YOU’RE MADE OF!!
              <br />
            </Typography>
            <Typography variant="h6" className={classes.whiteText}>
              We’re all made of something special. So tell us — what’s your
              secret ingredient?
            </Typography>
            <Grid container justify="center" alignItems="center">
              <Link to="/products" style={{textDecoration: "none"}}>
              <Button
                variant="contained"
                className={classes.whiteBtn}
                size="large"
              >
                START NOW
              </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </BackgroundImage>
  )
}

export default Banner
