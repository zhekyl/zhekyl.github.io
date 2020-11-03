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
  whole:{
    // margin:theme.spacing(2),
    "& > div:last-child":{
      marginTop: theme.spacing(1),
    }
  },
  image: {
    // flex: 1,
  },
  card:{
    borderRadius: theme.spacing(1.5),
  },
  linksArea: {
    flexDirection: "row-reverse",
  },
}))

const ProjectBlock = ({ title, fluidImgSrc, children, style }) => {
  const classes = useStyles()
  return (
    <div style={style} className={classes.whole}>
      <Card className={classes.card} variant="outlined">
        <Img fluid={fluidImgSrc} className={classes.image} />
      </Card>
      <Card className={classes.card} variant="outlined">
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
    </div>
  )
}

export default ProjectBlock
