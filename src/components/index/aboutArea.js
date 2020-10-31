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
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "unset",
    },
    "& > div": {
      [theme.breakpoints.up("sm")]: {
        maxWidth:500,
      },
    }
  },
  wordSection: {
    flex: 1,
    // display:'flex',
    height: "100%",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      marginBottom: "unset",
    },
  },
  picSection: {
    width:'100%',
    flex: 1,
    display: "flex",
    "& > div": {
      flex: 1,
      marginLeft: 0,
    },
    "& > div:last-child": {
      marginLeft: theme.spacing(2),
    },
    "& > div:first-child": {
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(2),
      },
    },
  },
  picCol: {
    display: "flex",
    flexDirection: "column",
    "& > div:first-child": {
      marginBottom: theme.spacing(2),
      flex: 1,
    },
  },
  img: {
    height: "100%",
    width: "100%",
  },
}))

const AboutArea = ({ imageSources }) => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <div className={classes.wordSection}>
        <Card className={classes.card} variant="outlined">
          <CardContent>
            <Typography variant="h4">
              Hello there
            </Typography>
            <Typography variant="body1" component="span">
              I'm a student studying{" "}
              <span className={classes.highlight}>computer science</span> and{" "}
              <span className={classes.highlight}>math</span> at Purdue
              University.
              <br />
              <br />
              My hobbies include exchanging goods and/or services for currency.
            </Typography>
          </CardContent>
        </Card>
      </div>

      <div className={classes.picSection}>
        <Card className={classes.card} variant="outlined">
          <Img
            fluid={imageSources.kyle_flowers.childImageSharp.fluid}
            className={classes.img}
          />
        </Card>
        <div className={classes.picCol}>
          <Card className={classes.card} variant="outlined">
            <Img
              fluid={imageSources.kyle_wires.childImageSharp.fluid}
              className={classes.img}
            />
          </Card>
          <Card className={classes.card} variant="outlined">
            <img src={kyle_fall} className={classes.img} />
            {/* <Img fluid={imageSources.kyle_cardboard.childImageSharp.fluid} /> */}
          </Card>
        </div>
      </div>
    </div>
  )
}

export default AboutArea
