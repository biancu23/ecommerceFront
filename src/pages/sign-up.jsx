import React from "react"
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
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
}))
const SignUp = () => {
  const classes = useStyles()

  // Formulario y validación con formik y Yup
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      lastName: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("You must enter a valid email.")
        .required("You must enter a valid email."),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters.")
        .required("Password must be at least 6 characters."),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords don't match!")
        .required("Passwords don't match!"),
      name: Yup.string().required("Name is required."),
      lastName: Yup.string().required("Last name is required."),
    }),
    onSubmit: valores => {
      console.log(valores)
    },
  })

  return (
    <>
      <Container style={{ marginTop: "2rem" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <img
              src="https://dummyimage.com/500x600/000/fff"
              alt="New Account"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" className={classes.heading}>
              NEW ACCOUNT
            </Typography>
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
              <TextField
                error={formik.errors.confirmPassword}
                type="password"
                id="confirmPassword"
                label="Confirm Password"
                fullWidth
                className={classes.textField}
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={formik.errors.confirmPassword}
              />
              <TextField
                error={formik.errors.name}
                type="text"
                id="name"
                label="First Name"
                fullWidth
                className={classes.textField}
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={formik.errors.name}
              />
              <TextField
                error={formik.errors.lastName}
                type="text"
                id="lastName"
                label="Last Name"
                fullWidth
                className={classes.textField}
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={formik.errors.lastName}
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
                  type="submit"
                >
                  REGISTER
                </Button>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Container>
      <Newsletter />
    </>
  )
}

export default SignUp
