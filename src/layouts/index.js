import React from "react"
import { CssBaseline, Container, makeStyles, ThemeProvider } from "@material-ui/core"
import theme from "../theme"

import Particles from "react-particles-js"
import particleParams from "../assets/json/particleParams.json"

import Footer from "../components/footer"
import Header from "../components/header"

// Inline Fontawesome Styles to prevent flashing icons during first page load.
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

const useStyles = makeStyles(theme => ({
  particles: {
    position: "fixed",
    zIndex: -100,
  },
}))

const Layout = ({ children }) => {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <CssBaseline />
        {/* <Particles
          className={classes.particles}
          height={`100vh`}
          width={`100vw`}
          params={particleParams}
        /> */}
        <Header/>
        <Container maxWidth="lg" style={{scrollBehavior:"smooth"}}>{children}</Container>
        {/* <footer className={layoutStyles.footer}>
          {`© ${new Date().getFullYear()}, Built with <3 by Kyle Zheng`}
        </footer> */}
        <Footer />
      </React.Fragment>
    </ThemeProvider>
  )
}

export default Layout
