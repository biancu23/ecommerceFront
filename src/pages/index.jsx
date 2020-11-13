import React, { useState } from "react"
import {
  
  Typography,
 
  Button,
  Container,
  Grid,
} from "@material-ui/core"
import NewItems from "../components/NewItems"
import { makeStyles } from "@material-ui/styles"
import Banner from "../components/Banner"
import Newsletter from "../components/Newsletter"
import { Link } from "gatsby"
import useGoals from "../hooks/useGoals"
import useCategories from "../hooks/useCategories"


const useStyles = makeStyles(theme => ({
  heading: {
    textAlign: "center",
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },

  goalGrid: {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    height: "500px",
    minHeight: "300px",
  },
  goalText: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    textAlign: "left",
    padding: theme.spacing(2),
  },
  blackButton: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(3),
  },
  buttonDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  whiteButton: {
    width: "100%",
    backgroundColor: "white",
    borderColor: theme.palette.common.black,
    boxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
  },
  blackLink: {
    textDecoration: "none",
    color: theme.palette.common.black,
  },
}))

const IndexPage = () => {
  const classes = useStyles()
  

  //GraphQl Categories
  const responseCategories = useCategories()
  const [categories] = useState(responseCategories)

  //GraphQL Goals
  const responseGoals = useGoals()
  const [goals] = useState(responseGoals)

  return (
    <>
      <Banner />
      <main>
        <Container style={{ marginTop: "2rem" }}>
          <Typography variant="h4" className={classes.heading}>
            CHOOSE YOUR GOAL
          </Typography>

          <Grid container spacing={3} style={{ paddingBottom: "2rem" }}>
            {goals.map(goal => (
              <Grid item xs={12} md={4} key={goal.id}>
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="flex-end"
                  className={classes.goalGrid}
                  style={{
                    backgroundImage: `url(${goal.image.sharp.fluid.src})`,
                  }}
                >
                  <Grid item xs={8} className={classes.goalText}>
                    <Typography variant="h4">{goal.name}</Typography>
                  </Grid>
                </Grid>
                <Link
                  to="/products"
                  state={{productNameGoal: goal.name, productIdGoal: goal.id}}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    className={classes.blackButton}
                    color="primary"
                  >
                    BUY NOW
                  </Button>
                </Link>
              </Grid>
            ))}
          </Grid>

          <Typography variant="h4" className={classes.heading}>
            NEW ITEMS
          </Typography>
          <Grid container spacing={2}>
            <NewItems />
          </Grid>
          <Typography variant="h4" className={classes.heading}>
            SHOP BY CATEGORY
          </Typography>
          <Grid container spacing={2}>
            {categories.map(category => (
              <Grid
                item
                xs={6}
                md={2}
                className={classes.buttonDiv}
                key={category.id}
              >
                <Link
                  to="/products"
                  className={classes.blackLink}
                  style={{ width: "100%" }}
                  state={{ productName: category.name, productId: category.id }}
                >
                  <Button
                    size="large"
                    variant="outlined"
                    className={classes.whiteButton}
                  >
                    {category.name}
                  </Button>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Newsletter />
    </>
  )
}

export default IndexPage
