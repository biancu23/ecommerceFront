import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Box,
} from "@material-ui/core"
import { Link } from "gatsby"
import Newsletter from "../components/Newsletter"
import { useFormik } from "formik"
import * as Yup from "yup"

const useStyles = makeStyles(theme => ({
  heading: {
    marginTop: theme.spacing(2),
  },
  form: {
    padding: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  textField: {
    marginBottom: theme.spacing(4),
  },
  sendGrid: {
    marginTop: theme.spacing(2),
  },
  blackButton: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
}))

const Login = () => {
  const classes = useStyles()

  // Formulario y validación con formik y Yup
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("You must enter a valid email.")
        .required("You must enter a valid email."),
      password: Yup.string()
        .min(6, "Wrong Password.")
        .required("Wrong Password."),
    }),
    onSubmit: valores => {
      console.log(valores)
    },
  })

  return (
    <>
      <Container fixed>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4" className={classes.heading}>
              LOGIN
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <form
              className={classes.form}
              autoComplete="off"
              onSubmit={formik.handleSubmit}
            >
              <TextField
                error={formik.errors.email}
                type="email"
                id="email"
                label="Email Address"
                fullWidth
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={classes.textField}
                helperText={formik.errors.email}
              />
              <TextField
                error={formik.errors.password}
                type="password"
                id="password"
                label="Password"
                fullWidth
                className={classes.textField}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={formik.errors.password}
              />
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                className={classes.sendGrid}
              >
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  type="submir"
                >
                  LOGIN
                </Button>
                <Link to="/login" style={{textDecoration: "none"}}>
                  <Typography color="secondary" style={{ paddingLeft: "1rem" }}>
                    Forgot your password?
                  </Typography>
                </Link>
              </Grid>
            </form>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box p={2} width="100%" bgcolor="grey.200">
              <Typography variant="h5">NEW CUSTOMER?</Typography>
              <p>Create an account with us and you'll be able to:</p>
              <ul>
                <li>Check out faster</li>
                <li>Save multiple shipping addresses</li>
                <li>Access your order history</li>
                <li>Track new orders</li>
                <li>Save items to your wish list</li>
              </ul>
              <Link to="/sign-up" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  size="large"
                  className={classes.blackButton}
                  color="primary"
                >
                  Register
                </Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Newsletter />
    </>
  )
}

export default Login
