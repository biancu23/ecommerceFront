import React, { useState } from "react"
import {
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core"
import ProductCard from "../components/ProductCard"
import useGoals from "../hooks/useGoals"
import useCategories from "../hooks/useCategories"
import Newsletter from "../components/Newsletter"
import { graphql, Link } from "gatsby"
import urlSlug from "url-slug"
import { makeStyles } from "@material-ui/core/styles"

export const query = graphql`
  query($id: String!) {
    allStrapiProducts(filter: { goal: { name: { eq: $id } } }) {
      nodes {
        id
        name
        brand
        price
        goal {
          name
          id
        }
        category {
            name
            id
        }
        image {
          sharp: childImageSharp {
            fluid(maxWidth: 250, maxHeight: 250) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: "none",
    color: theme.palette.common.black,
  },
}))

const Goals = ({ data }) => {
  const classes = useStyles()

  //GraphQl Categories
  const responseCategories = useCategories()
  const [categories] = useState(responseCategories)

  //GraphQL Goals
  const responseGoals = useGoals()
  const [goals] = useState(responseGoals)

  console.log(data)
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
                  key={category.id}
                  className={classes.link}
                >
                  <ListItem button>
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
                  key={goal.id}
                >
                <ListItem button >
                  <ListItemText primary={goal.name} />
                </ListItem>
                </Link>
              ))}
            </List>
          </Grid>
          <Grid item md={10} xs={12}>
            <Typography variant="h4" style={{ padding: "1rem" }}>
              <strong>
                { typeof(data.allStrapiProducts.nodes[0]) === "undefined"
                  ? "No Results"
                  : data.allStrapiProducts.nodes[0].goal.name}
              </strong>
            </Typography>
            <Grid container spacing={2}>
              {data.allStrapiProducts.nodes.map(product => (
                <Grid
                  item
                  xs={6}
                  md={3}
                  style={{ paddingBottom: "2rem" }}
                  key={product.id}
                >
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

export default Goals
