import React from "react"
import { CssBaseline, Container, makeStyles, ThemeProvider } from "@material-ui/core"
import theme from "../theme"

// Inline Fontawesome Styles to prevent flashing icons during first page load.
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

const useStyles = makeStyles((theme)=>({
  
}))

const Layout = ({ children }) => {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <CssBaseline/>
      <Container maxWidth="lg">
        {children}
      </Container>
      {/* <footer className={layoutStyles.footer}>
          {`© ${new Date().getFullYear()}, Built with <3 by Kyle Zheng`}
        </footer> */}
    </ThemeProvider>
  )
}

export default Layout
