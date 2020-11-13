import React from "react"
import Img from "gatsby-image"

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core"

import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"

import ResumeIcon from "@material-ui/icons/Description"

const useStyles = makeStyles(theme => ({
  footer: {
    marginTop: 128,
    marginBottom:theme.spacing(1),
    textAlign: "right",
  },
}))

const Footer = ({}) => {
  const classes = useStyles()
  return (
    <Container maxWidth="lg" className={classes.footer}>
      <Typography variant="subtitle2" component="span">
        {"© 2020, Made with <3 by Kyle Zheng"}
      </Typography>
    </Container>
  )
}
export default Footer
