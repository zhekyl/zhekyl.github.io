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
    visibility: "hidden",
    [theme.breakpoints.up("sm")]: {
      visibility: "unset",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  },
  navlink: {
    padding: theme.spacing(1),
    marginLeft: theme.spacing(2),
    // marginRight: theme.spacing(1),
    textDecoration: "none",
    color: "unset",
    transition: "color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    "&:hover": {
      color: theme.palette.text.disabled,
    },
  },
  navText: {
    borderBottom: "3px solid black",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  logo: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  navlinks:{

  }
}))

const Navlink = ({ href, children }) => {
  const classes = useStyles()
  return (
    <a href={href} className={classes.navlink}>
      <Typography variant="h6" component={"span"} className={classes.navText}>
        {children}
      </Typography>
    </a>
  )
}

const Header = () => {
  const classes = useStyles()

  return (
    <Container maxWidth="lg" className={classes.container}>
      <img src={logoSrc} className={classes.logo} />
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
