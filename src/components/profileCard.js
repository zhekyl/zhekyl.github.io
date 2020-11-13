import React from "react"
import Img from "gatsby-image"

import {
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core"

import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"

import ResumeIcon from "@material-ui/icons/Description"

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 360,
    minWidth:240,
    position: "relative",
    borderRadius: theme.spacing(1.5),
    margin:'auto',
  },
  actions: {
    justifyContent: "space-between",
    position: "absolute",
    bottom: 0,
    width: "100%",
    zIndex: 10,
  },
  media: {
    flex: 2,
  },
  content: {
    flex: 3,
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
  },
  img: {
    height: "100%",
    width: "100%",
  },
}))

const ProfileCard = ({ imgSrc, title, children }) => {
  const classes = useStyles()
  return (
    <Card className={classes.card} variant="outlined">
        <CardContent>
          <Typography variant="h4">{title}</Typography>
          <Typography variant="body1">
            {children}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions}>
          <Button endIcon={<ResumeIcon />} href="/Resume.pdf" variant="outlined" target="_blank" rel="noopener">
            Resume
          </Button>
          <div>
            <IconButton href="https://www.linkedin.com/in/kyle-zheng-9b2546145/" target="_blank" rel="noopener">
              <LinkedInIcon />
            </IconButton>
            <IconButton href="https://github.com/zhengkyl" target="_blank" rel="noopener">
              <GitHubIcon />
            </IconButton>
          </div>
        </CardActions>
        <Img fluid={imgSrc} />
    </Card>
  )
}
export default ProfileCard
