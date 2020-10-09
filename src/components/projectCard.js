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
import GitHubIcon from "@material-ui/icons/GitHub"
// import WebIcon from '@material-ui/icons/Web';
import WebIcon from "@material-ui/icons/WebAsset"

const useStyles = makeStyles(theme => ({
  image: {
    flex: 1,
  },
  card: {
    borderRadius: theme.spacing(1.5),
    marginTop: theme.spacing(1),
    display: "flex",
  },
  content:{
    width:"100%"
  },
  linksArea: {
    flexDirection: "row-reverse",
  },
}))

const ProjectCard = ({ title, fluidImgSrc, children, githubLink }) => {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      {fluidImgSrc && <Img fluid={fluidImgSrc} className={classes.image} />}
      <div className={classes.content}>
        <CardContent>
          <Typography variant="h4">{title}</Typography>
          <Typography variant="body2">{children}</Typography>
        </CardContent>
        <CardActions className={classes.linksArea}>
          <IconButton>
            <GitHubIcon />
          </IconButton>
          <Button size="small" variant="outlined" startIcon={<WebIcon />}>
            kgg.gg
          </Button>
        </CardActions>
      </div>
    </Card>
  )
}

export default ProjectCard
