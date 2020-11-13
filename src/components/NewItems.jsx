import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core"
import Image from "gatsby-image"
import { makeStyles } from "@material-ui/styles"
import urlSlug from "url-slug"

const useStyles = makeStyles(theme => ({
  blackLink: {
    textDecoration: "none",
    color: theme.palette.common.black,
  },
  productBackground: {
    backgroundColor: "#ebddf8",
  },
}))

const NewItems = () => {
  const classes = useStyles()

  const datos = useStaticQuery(graphql`
    query {
      allStrapiProducts(sort: { order: DESC, fields: created_at }, limit: 4) {
        nodes {
          id
          name
          price
          brand
          created_at
          category {
            name
          }
          image {
            sharp: childImageSharp {
              fluid(maxHeight: 250, maxWidth: 250) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      {datos.allStrapiProducts.nodes.map(product => (
        <Grid item xs={6} md={3} style={{ paddingBottom: "2rem" }} key={product.id}>
          <Card>
            <Link
              to={`products/${urlSlug(product.name, {
                separator: "_",
              })}`}
              className={classes.blackLink}
            >
              <CardActionArea>
                <CardMedia className={classes.productBackground}>
                  <Image fluid={product.image.sharp.fluid} />
                </CardMedia>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    style={{ fontWeight: "bold" }}
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="primary"
                    component="p"
                    gutterBottom
                  >
                    {product.brand}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    gutterBottom
                  >
                    {product.category.name}
                  </Typography>

                  <Typography
                    variant="h5"
                    color="primary"
                    style={{ textAlign: "right", fontWeight: "bold" }}
                    gutterBottom
                  >
                    {product.price}$
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        </Grid>
      ))}
    </>
  )
}

export default NewItems
