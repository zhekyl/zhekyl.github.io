import React from "react"
import Img from "gatsby-image"

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  makeStyles,
  Typography,
  Paper,
} from "@material-ui/core"

import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"

import ResumeIcon from "@material-ui/icons/Description"

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 300,
    position:"relative",
    borderRadius: theme.spacing(1.5),
    // margin: "auto",
  },
  actions: {
    justifyContent: "space-between",
    position:"absolute",
    bottom:0,
    width:"100%",
    zIndex:10,
  },
}))

const ProfileCard = ({ imgSrc }) => {
  const classes = useStyles()
  return (
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <Typography variant="h4">Hey there!</Typography>
          <Typography variant="body1">
            I'm currently looking for a Summer 2021 internship, but hit me up
            regardless!
          </Typography>
        </CardContent>
        
        <CardActions className={classes.actions}>
          <Button endIcon={<ResumeIcon />} variant="outlined" >
            Resume
          </Button>
          <div>
            <IconButton>
              <LinkedInIcon />
            </IconButton>
            <IconButton>
              <GitHubIcon />
            </IconButton>
          </div>
        </CardActions>
        <CardMedia>
          <Img fluid={imgSrc} />
        </CardMedia>
      </Card>
  )
}
export default ProfileCard
