import React from "react"
import Img from "gatsby-image"
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CssBaseline,
  Container,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core"
import GitHubIcon from "@material-ui/icons/GitHub"
// import WebIcon from '@material-ui/icons/Web';
import WebIcon from "@material-ui/icons/WebAsset"

const useStyles = makeStyles(theme => ({
  image: {
    flex:1,
  },
  card: {
    margin: theme.spacing(2),
    borderRadius: theme.spacing(2),
    display:'flex',
    flexDirection:"column"
  },
  linksArea:{
    flexDirection:"row-reverse"
  }
}))

const ProjectCard = ({ title, fluidImgSrc, children, style }) => {
  const classes = useStyles()
  return (
    <Card style={style} className={classes.card}>
      <Img fluid={fluidImgSrc} className={classes.image} />
      <CardContent>
        <Typography variant="h3">{title}</Typography>
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
    </Card>
  )
}

export default ProjectCard
