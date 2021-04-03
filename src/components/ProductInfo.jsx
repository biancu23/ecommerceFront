import {
  Button,
  Container,
  Grid,
  Typography,
  TextField,
} from "@material-ui/core"
import React from "react"
import { makeStyles } from "@material-ui/styles"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import { useFormik } from "formik"
import * as Yup from "yup"
import Newsletter from "./Newsletter"
import urlSlug from "url-slug"

const useStyles = makeStyles(theme => ({
  productBackground: {
    backgroundColor: "#ebddf8",
  },
  priceDiv: {
    display: "flex",
    justifyContent: "flex-end",
    padding: theme.spacing(3),
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
}))

export const query = graphql`
  query($id: String!) {
    allStrapiProducts(filter: { id: { eq: $id } }) {
      nodes {
        id
        description
        brand
        name
        price
        image {
          sharp: childImageSharp {
            fluid(maxWidth: 450) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

const ProductInfo = ({ data }) => {
  const classes = useStyles()
  const {
    name,
    description,
    brand,
    price,
    image,
    id
  } = data.allStrapiProducts.nodes[0]

  const formik = useFormik({
    initialValues: {
      qty: 1,
    },
    validationSchema: Yup.object({
      qty: Yup.number().required("Invalid quantity."),
    }),
    onSubmit: valores => {
    },
  })

  console.log(image.sharp.fluid.src)
  return (
    <>
      <Container style={{ marginTop: "2rem" }}>
        <Grid container spacing={3} style={{ paddingBottom: "2rem" }}>
          <Grid item xs={12} md={5} className={classes.productBackground}>
            <Image fluid={image.sharp.fluid} />
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography variant="h5" color="primary">
              <b>{brand}</b>
            </Typography>
            <Typography variant="h3">{name}</Typography>
            <p>{description}</p>

            <Grid className={classes.priceDiv}>
              <form autoComplete="off" onSubmit={formik.handleSubmit}>
                <Grid
                  container
                  direction="row"
                  justify="space-around"
                  alignItems="center"
                  style={{paddingRight:"1rem"}}
                >
                  <TextField
                    error={formik.errors.qty}
                    type="number"
                    id="qty"
                    label="Quantity"
                    fullWidth={false}
                    value={formik.values.qty}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    helperText={formik.errors.qty}
                    size="small"
                    style={{ marginRight: "1rem" }}
                  />

                  <Typography variant="h3" style={{ marginRight: "1rem" }}>
                    {price}$
                  </Typography>
                  <Button
                  className="snipcart-add-item"
                  data-item-id={id}
                  data-item-price={price}
                  data-item-url={`https://fitecommerce.netlify.app/products/${urlSlug(name, {
                    separator: "_",
                  })}`}
                  data-item-name={`${brand} ${name}`}
                  data-item-image={image.sharp.fluid.src}
                    variant="contained"
                    size="large"
                    color="primary"
                    type="submit"
                  >
                    ADD TO CART
                  </Button>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Newsletter />
    </>
  )
}

export default ProductInfo
