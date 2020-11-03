import React from "react"
import { Link } from "gatsby"
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Paper,
  makeStyles,
  Typography,
} from "@material-ui/core"
import logoSrc from "../assets/images/logo.png"
const useStyles = makeStyles(theme => ({
  container: {
    // height: theme.spacing(6),
    // visibility: "hidden",
    // [theme.breakpoints.up("sm")]: {
      // visibility: "unset",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    // },
  },
  navlink: {
    paddingBottom:theme.spacing(1),
    marginLeft: theme.spacing(3),
    textDecoration: "none",
    color: "unset",
    transition: "color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    borderBottom: `3px solid ${theme.palette.text.primary}`,
    "&:hover": {
      color: theme.palette.primary.main,
      borderColor:theme.palette.primary.main,
    },
  },
  logo: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    boxShadow:`${theme.spacing(0.5)}px ${theme.spacing(0.5)}px ${theme.palette.text.primary}`,
    transition: "box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    "&:hover":{
      boxShadow:`${theme.spacing(0.5)}px ${theme.spacing(0.5)}px ${theme.palette.primary.main}`,
    }
  },
  navlinks:{
    display:"none",
    [theme.breakpoints.up("sm")]:{
      display:"unset",
    }
  }
}))

const Navlink = ({ href, children }) => {
  const classes = useStyles()
  return (
    <a href={href} className={classes.navlink}>
      <Typography variant="h6" component={"span"}>
        {children}
      </Typography>
    </a>
  )
}

const Header = () => {
  const classes = useStyles()

  return (
    <Container maxWidth="lg" className={classes.container}>
      <a href="/">
        <img src={logoSrc} className={classes.logo} />
      </a>
      <div className={classes.navlinks}>
        <Navlink href="#about">About</Navlink>
        <Navlink href="#experience">Experience</Navlink>
        <Navlink href="#projects">Projects</Navlink>
        <Navlink href="#resume">Resume</Navlink>
      </div>

      {/* <Link></Link> */}
    </Container>
  )
}

export default Header
