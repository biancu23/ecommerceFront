import { Box, Grid } from "@material-ui/core"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"

const useStyles = makeStyles(theme => ({
  banner: {
    height: "85vh",
    position: "relative",
    clipPath: "polygon(0 0, 100% 0%, 100% 77%, 0 100%)",
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
  console.log(image.sharp)
  return (
    <BackgroundImage className={classes.banner} fluid={image.sharp.fluid} fadeIn="soft">
    <Box display="flex" width="100%" height="100%">
      <Grid container justify="center">
        <Grid item xs={8}>
          <h1>Banner</h1>
        </Grid>
      </Grid>
    </Box>
    </BackgroundImage>
  )
}

export default Banner
