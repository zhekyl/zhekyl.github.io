import React from "react"
import Img from "gatsby-image"
import clsx from "clsx"
import {
  Card,
  CardContent,
  CardMedia,
  Paper,
  makeStyles,
  Typography,
} from "@material-ui/core"

import kyle_fall from "../../assets/images/kyle_fall.gif"
const useStyles = makeStyles(theme => ({
  card: {
    borderRadius: theme.spacing(1.5),
  },
  container: {
    display: "flex",
  },
  wordSection:{
    flex: 1,
    // display:'flex',
  },
  picSection: {
    flex: 1,
    display:'flex',
    "& > div" :{
      flex:1,
      marginLeft:theme.spacing(2),
    }
  },
  flex: {
    flex: 1,
  },
  picCol:{
    display:'flex',
    flexDirection:'column',
    "& > div:first-child": {
      marginBottom:theme.spacing(2),
    }
  },
  img:{
    height:'100%',
    width:'100%'
  }
 
}))



const AboutArea = ({ imageSources }) => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <div className={classes.wordSection}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="body1" component="span">
              I am a heterosexual asian male studying{" "}
              <span className={classes.highlight}>computer science</span> and{" "}
              <span className={classes.highlight}>math</span> at Purdue
              University.
            </Typography>
            <Typography variant="body1">
              When I'm not subverting societal expectations and defying gender
              norms, I'm mostly working on dumb projects or thinking about
              dumber projects to start.
            </Typography>
          </CardContent>
        </Card>
      </div>

      <div className={classes.picSection}>
        <Card className={classes.card} >
          <Img  fluid={imageSources.kyle_flowers.childImageSharp.fluid} className={classes.img}/>
        </Card>
        <div className={classes.picCol}>
          <Card className={classes.card}>
            <Img fluid={imageSources.kyle_wires.childImageSharp.fluid} />
          </Card>
          <Card className={classes.card}>
            <img src={kyle_fall} className={classes.img}/>
            {/* <Img fluid={imageSources.kyle_cardboard.childImageSharp.fluid} /> */}
          </Card>
        </div>
      </div>
    </div>
  )
}

export default AboutArea
