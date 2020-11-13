import React from "react"
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core"
import Image from "gatsby-image"
import { makeStyles } from "@material-ui/core/styles"
import urlSlug from "url-slug"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  blackLink: {
    textDecoration: "none",
    color: theme.palette.common.black,
  },
  productBackground: {
    backgroundColor: "#ebddf8",
  },
}))
const ProductCard = ({ product }) => {
  const classes = useStyles()
  const { brand, name, category, image, price } = product

  return (
    <Card>
      <Link
        to={urlSlug(name, {
          separator: "_",
        })}
        className={classes.blackLink}
      >
        <CardActionArea>
          <CardMedia className={classes.productBackground}>
            <Image fluid={image.sharp.fluid} />
          </CardMedia>
          <CardContent>
            <Typography
              gutterBottom
              variant="subtitle1"
              style={{ fontWeight: "bold" }}
            >
              {name}
            </Typography>
            <Typography
              variant="body2"
              color="primary"
              component="p"
              gutterBottom
            >
              {brand}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom
            >
              {category.name}
            </Typography>

            <Typography
              variant="h5"
              color="primary"
              style={{ textAlign: "right", fontWeight: "bold" }}
              gutterBottom
            >
              {price}$
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  )
}

export default ProductCard
