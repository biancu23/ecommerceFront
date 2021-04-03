import React, { useState, useEffect } from "react"
import {
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core"
import ProductCard from "../components/ProductCard"
import useProducts from "../hooks/useProducts"
import useFilter from "../hooks/useFilter"
import Newsletter from "../components/Newsletter"
import urlSlug from "url-slug"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: "none",
    color: theme.palette.common.black,
  },
}))

const Products = () => {
  const classes = useStyles()


  //GraphQL Products
  const response = useProducts()
  const [products] = useState(response)

  //Product Filter
  const {
    categories,
    goals,
  } = useFilter()

  
  

  return (
    <>
      <Container style={{ paddingTop: "2rem" }}>
        <Grid container spacing={3}>
          <Grid item md={2}>
            <Typography variant="h5">
              <strong>By Category</strong>
            </Typography>
            <List component="nav" aria-label="Category List of Products">
              {categories.map(category => (
                <Link
                to={`/products/categories/${urlSlug(category.name, {
                  separator: "_",
                })}`}
                className={classes.link}
              >
                <ListItem button key={category.id}>
                  <ListItemText primary={category.name} />
                </ListItem>
              </Link>
              ))}
            </List>
            <Typography variant="h5">
              <strong>By Goal</strong>
            </Typography>
            <List component="nav" aria-label="secondary mailbox folder">
              {goals.map(goal => (
                <Link
                to={`/products/goals/${urlSlug(goal.name, {
                  separator: "_",
                })}`}
                className={classes.link}
              >
              <ListItem button key={goal.id}>
                <ListItemText primary={goal.name} />
              </ListItem>
              </Link>
              ))}
            </List>
          </Grid>
          <Grid item md={10} xs={12}>
            <Grid container spacing={2}>
              {products.map(product => (
                <Grid item xs={6} md={3} style={{ paddingBottom: "2rem" }} key={product.id}>
                  <ProductCard product={product} />
                </Grid>
              ))}
            </Grid>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            ></Grid>
          </Grid>
        </Grid>
      </Container>
      <Newsletter />
    </>
  )
}

export default Products
