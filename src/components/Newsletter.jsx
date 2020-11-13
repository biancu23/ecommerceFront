import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, TextField, Button, Typography, Box } from "@material-ui/core"
import { useFormik } from "formik"
import * as Yup from "yup"

const useStyles = makeStyles(theme => ({
  textField: {
    marginBottom: theme.spacing(4),
  },

  blackButton: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  newsletter: {
    backgroundColor: theme.palette.primary.main,
    marginTop: theme.spacing(6),
    padding: theme.spacing(5),
    color: theme.palette.common.white,
  },
  input: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
}))
const Newsletter = () => {
  const classes = useStyles()
  // Formulario y validación con formik y Yup
  const formik = useFormik({
    initialValues: {
      emailNewsletter: "",
    },
    validationSchema: Yup.object({
      emailNewsletter: Yup.string()
        .email("You must enter a valid email.")
        .required("You must enter a valid email."),
    }),
  })

  return (
    <Box className={classes.newsletter} alignItems="center">
      <Typography variant="h3" align="center">
        SUSCRIBE TODAY!!
      </Typography>
      <Typography
        variant="h6"
        align="center"
        style={{ marginBottom: "1.5rem" }}
      >
        To try new products, training programs, nutritional advice and much
        more!
      </Typography>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={6}>
          <form autoComplete="off" onSubmit={formik.handleSubmit}>
            <TextField
              error={formik.errors.emailNewsletter}
              type="email"
              id="emailNewsletter"
              fullWidth
              value={formik.values.emailNewsletter}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={classes.textField}
              helperText={formik.errors.emailNewsletter}
              InputProps={{
                className: classes.input,
              }}
            />
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Button
                variant="contained"
                size="large"
                className={classes.blackButton}
                color="secondary"
              >
                Suscribe
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Newsletter
