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
    marginTop:128
  },
  
}))

const Footer = ({ imgSrc }) => {
  const classes = useStyles()
  return (
    <div className={classes.footer}>
      made by kyle
    </div>
  )
}
export default Footer
