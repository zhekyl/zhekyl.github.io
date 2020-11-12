import React from "react"
import Img from "gatsby-image"
import clsx from "clsx"
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
  whole:{
    // margin:theme.spacing(2),
    "& > div:last-child":{
      marginTop: theme.spacing(1),
    }
  },
  image: {
    padding:theme.spacing(3)
  },
  card:{
    borderRadius: theme.spacing(1.5),
  },
  linksArea: {
    flexDirection: "row-reverse",
  },
}))

const ProjectBlock = ({ title, fluidImgSrc, children, style, githubLink, linkTitle, link }) => {
  const classes = useStyles()
  return (
    <div style={style} className={classes.whole}>
      <Card className={clsx(classes.card,classes.image)} variant="outlined">
        <Img fluid={fluidImgSrc} />
      </Card>
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <Typography variant="h3">{title}</Typography>
          <Typography variant="body2">{children}</Typography>
        </CardContent>
        <CardActions className={classes.linksArea}>
          <IconButton href={githubLink} target="_blank" rel="noopener">
            <GitHubIcon />
          </IconButton>
          <Button size="small" variant="outlined" target="_blank" href={link} rel="noopener" startIcon={<WebIcon />}>
            {linkTitle}
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default ProjectBlock
