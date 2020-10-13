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
  image: {
    borderRadius: theme.spacing(1.5),
    maxWidth: 300,
    margin: "auto",
    marginBottom: "-50%",
  },
  card: {
    borderRadius: theme.spacing(1.5),
    paddingTop: "50%",
  },
  actions:{
    justifyContent:"space-around"
  }
}))

const ProfileCard = ({ imgSrc }) => {
  const classes = useStyles()
  return (
    <Container maxWidth="sm">
      <Card className={classes.image}>
        <Img fluid={imgSrc} />
      </Card>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="body1">
            I'm currently looking for a Summer 2021 internship, but hit me up
            regardless!
          </Typography>
        </CardContent>
        <CardActions className={classes.actions}>
          <Button endIcon={<ResumeIcon />} variant="outlined" size="large">
            Resume
          </Button>
          <IconButton>
            <LinkedInIcon />
          </IconButton>
          <IconButton>
            <GitHubIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Container>
  )
}
export default ProfileCard
