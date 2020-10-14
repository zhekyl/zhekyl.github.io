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
  container: {
    // [theme.breakpoints.up("sm")]:{
    //   display:"flex",
    // }
    maxWidth:400,
  },
  image: {
    borderRadius: theme.spacing(1.5),
    // maxWidth: 300,
    // margin: "auto",
    marginLeft:theme.spacing(2),
    marginRight:theme.spacing(2),
    marginBottom: "-30%",
    position: "relative",
    // [theme.breakpoints.up("sm")]:{
    //   flex:1,
    //   marginBottom:0,
    // }
  },
  card: {
    // maxWidth: 332,
    borderRadius: theme.spacing(1.5),
    paddingTop: "30%",
    margin: "auto",
    // [theme.breakpoints.up("sm")]:{
    //   flex:2,
    //   paddingTop:"unset",
    // }
  },
  actions: {
    justifyContent: "space-between",
  },
}))

const ProfileCard = ({ imgSrc }) => {
  const classes = useStyles()
  return (
    <Container maxWidth="sm" className={classes.container}>
      <Card className={classes.image} elevation={2}>
        <Img fluid={imgSrc} />
      </Card>
      <Card className={classes.card} >
        <CardContent>
          <Typography variant="h5">Hey there, traveler!</Typography>
          <Typography variant="body1">
            I'm currently looking for a Summer 2021 internship, but hit me up
            regardless!
          </Typography>
        </CardContent>
        <CardActions className={classes.actions}>
          <Button endIcon={<ResumeIcon />} variant="outlined" size="large">
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
      </Card>
    </Container>
  )
}
export default ProfileCard
