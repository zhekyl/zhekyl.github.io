import React from "react"
import Img from "gatsby-image"
import {
  Card,
  CardContent,
  CardMedia,
  Paper,
  makeStyles,
  Typography,
} from "@material-ui/core"
const useStyles = makeStyles(theme => ({
  card:{
    borderRadius:theme.spacing(1.5),
    maxWidth:600,
  }
}))

const AboutArea = ({ imageSources }) => {
  const classes = useStyles()
  return (
    <>
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="body1" component="span">
            I am a heterosexual asian male studying{" "}
            <span className={classes.highlight}>computer science</span> and{" "}
            <span className={classes.highlight}>math</span> at Purdue
            University.
          </Typography>
        </CardContent>
      </Card>

      <Card className={classes.card}>
        <Img fluid={imageSources.kyle_wires.childImageSharp.fluid} />
      </Card>
    </div>
      
        
      <Card className={classes.card}>
        <Img fluid={imageSources.kyle_focus.childImageSharp.fluid} />
      </Card>
      
      <div>
        <Card className={classes.card}>
        <Img fluid={imageSources.kyle_cardboard.childImageSharp.fluid} />
      </Card>
        <Card className={classes.card}>
        <CardContent>
          <Typography variant="body1">
            When I'm not subverting societal expectations and defying gender
            norms, I'm mostly working on dumb projects or thinking about dumber
            projects to start.
          </Typography>
        </CardContent>
      </Card>
      
      </div>
      
    </>
  )
}

export default AboutArea
