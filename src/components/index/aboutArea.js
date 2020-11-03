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

import SchoolIcon from "@material-ui/icons/School"
import LocalFloristIcon from "@material-ui/icons/LocalFlorist"
import LocalAtmIcon from "@material-ui/icons/LocalAtm"

import PublicIcon from "@material-ui/icons/Public"
import PaletteIcon from "@material-ui/icons/Palette"
import CasinoIcon from "@material-ui/icons/Casino"

import SportsEsportsIcon from "@material-ui/icons/SportsEsports"
import WhatshotIcon from "@material-ui/icons/Whatshot"
import RedeemIcon from "@material-ui/icons/Redeem"
import PollIcon from "@material-ui/icons/Poll"
import LocalHotelIcon from "@material-ui/icons/LocalHotel"
import LocalLaundryServiceIcon from "@material-ui/icons/LocalLaundryService"

import kyle_fall from "../../assets/images/kyle_fall.gif"
import RadarSvg from "../../assets/svgs/radar.svg"
const useStyles = makeStyles(theme => ({
  card: {
    borderRadius: theme.spacing(1.5),
  },
  container: {
    display: "flex",
    flexDirection: "column-reverse",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "unset",
    },
    // "& > div": {
    //   [theme.breakpoints.up("sm")]: {
    //     maxWidth:500,
    //   },
    // }
  },
  wordSection: {
    flex: 2,
    // display:'flex',
    height: "100%",
    marginRight:0,
    [theme.breakpoints.up("sm")]: {
      marginBottom: "unset",
      marginRight:theme.spacing(4),
    },
  },
  picSection: {
    width: "100%",
    flex: 3,
    display: "flex",
    "& > div": {
      flex: 1,
      // marginLeft: 0,
    },
    // "& > div:last-child": {
    //   marginLeft: theme.spacing(2),
    // },
    // "& > div:first-child": {
    //   [theme.breakpoints.up("sm")]: {
    //     marginLeft: theme.spacing(2),
    //   },
    // },
    marginBottom: theme.spacing(2),

  },
  picCol: {
    display: "flex",
    flexDirection: "column",
    marginLeft:theme.spacing(2),
    "& > div:first-child": {
      marginBottom: theme.spacing(2),
      flex: 1,
    },
  },
  img: {
    height: "100%",
    width: "100%",
  },
  traits: {
    display: "flex",
    textAlign:"center",
    justifyContent:"space-evenly",
  },
  radar:{
    maxWidth:360,
    margin:"auto",
    display:"block"
  }
}))

const AboutArea = ({ imageSources }) => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <div className={classes.wordSection}>
        <Card className={classes.card} variant="outlined">
          <CardContent>
            <Typography variant="h4">Hello there</Typography>
            <Typography variant="body1" component="span">
              I'm a student studying{" "}
              <span className={classes.highlight}>computer science</span> and{" "}
              <span className={classes.highlight}>math</span> at Purdue
              University.
            </Typography>

            <Typography variant="h6">I like working on cool projects</Typography>

            <Typography variant="body1" component="span">
              At hackathons or in my room, with strangers or best friends, bringing ideas into reality is my passion.
            </Typography>

            <RadarSvg className={classes.radar}/>
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
