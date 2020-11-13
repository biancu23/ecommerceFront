import React from "react"
import Helmet from "react-helmet"
import Navbar from "../components/Navbar"
import { ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import theme from "./theme"
import Footer from "../components/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Ecommerce JAM</title>
        <meta name="description" content="Ecommerce JAM Stack" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        
        <CssBaseline />
        <Navbar />
        {children}
        <Footer/>
      </ThemeProvider>
    </>
  )
}

export default Layout
