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

const Products = ({ location }) => {
  const [filtered, setFiltered] = useState([])
  const [indexCategory, setIndexCategory] = useState({
    name: location.state.productName,
    id: location.state.productId,
  })
  const [indexGoal, setIndexGoal] = useState({
    name: location.state.productNameGoal,
    id: location.state.productIdGoal,
  })

  //GraphQL Products
  const response = useProducts()
  const [products] = useState(response)

  //Product Filter
  const {
    category,
    goal,
    categories,
    goals,
    selectedIndex,
    setSelectedIndex,
    setGoal,
    setCategory,
    handleCategoryClick,
    handleGoalClick,
  } = useFilter()

  useEffect(() => {
    if (indexCategory) {
      setCategory(indexCategory.name)
      setSelectedIndex(indexCategory.id)
    }
    if (indexGoal) {
      setGoal(indexGoal.name)
      setSelectedIndex(indexGoal.id)
    }
    if (goal || category) {
      const filter = products.filter(
        product =>
          product.goal.name === goal || product.category.name === category
      )
      setFiltered(filter)
      setIndexCategory("")
      setIndexGoal("")
    } else {
      setFiltered(products)
    }

  }, [category, products, goal])

  return (
    <>
      <Container style={{ paddingTop: "2rem" }}>
        <Grid container spacing={3}>
          <Grid item xs={0} md={2}>
            <Typography variant="h5">
              <strong>By Category</strong>
            </Typography>
            <List component="nav" aria-label="Category List of Products">
              {categories.map(category => (
                <ListItem
                  button
                  selected={selectedIndex === category.id}
                  key={category.id}
                  onClick={event =>
                    handleCategoryClick(event, category.name, category.id)
                  }
                >
                  <ListItemText primary={category.name} />
                </ListItem>
              ))}
            </List>
            <Typography variant="h5">
              <strong>By Goal</strong>
            </Typography>
            <List component="nav" aria-label="secondary mailbox folder">
              {goals.map(goal => (
                <ListItem
                  button
                  selected={selectedIndex === goal.id}
                  key={goal.id}
                  onClick={event => handleGoalClick(event, goal.name, goal.id)}
                >
                  <ListItemText primary={goal.name} />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item md={10} xs={12}>
            <Grid container spacing={2}>
              {filtered.map(product => (
                <Grid item xs={6} md={3} style={{ paddingBottom: "2rem" }}>
                  <ProductCard key={product.id} product={product} />
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
