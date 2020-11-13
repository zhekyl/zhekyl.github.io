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
import WebIcon from "@material-ui/icons/WebAsset"

const useStyles = makeStyles(theme => ({
  image: {
    flex: 1,
  },
  card: {
    borderRadius: theme.spacing(1.5),
    margin: `${theme.spacing(2)}px ${theme.spacing(1)}px`,
    display: "flex",
  },
  content:{
    width:"100%"
  },
  linksArea: {
    flexDirection: "row-reverse",
  },
}))

const ProjectCard = ({ title, fluidImgSrc, children, githubLink, link }) => {
  const classes = useStyles()
  return (
    <Card className={classes.card} variant="outlined">
      {fluidImgSrc && <Img fluid={fluidImgSrc} className={classes.image} />}
      <div className={classes.content}>
        <CardContent>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="body2">{children}</Typography>
        </CardContent>
        <CardActions className={classes.linksArea}>
          <IconButton href={githubLink} target="_blank" rel="noopener">
            <GitHubIcon />
          </IconButton>
          {link && <Button size="small" variant="outlined" href={link} target="_blank" rel="noopener" startIcon={<WebIcon />}>
            site
          </Button>}
        </CardActions>
      </div>
    </Card>
  )
}

export default ProjectCard
