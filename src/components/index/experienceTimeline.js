import React from "react"
import {
  Button,
  Card,
  CardContent,
  CardActions,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core"
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineDot,
  TimelineContent,
  TimelineOppositeContent,
} from "@material-ui/lab"

const useStyles = makeStyles(theme => ({
  container: {
    maxWidth: 600,
    margin: "auto",
  },
  timeline: {
    padding: 0,
    "& li::before": {
      flex: "none",
      padding: 0,
    },
  },
  cardBottomRow:{
    justifyContent:"space-between"
  },
  card:{
    borderRadius:theme.spacing(1.5),
    textAlign:"left",
  }

}))

const TimelineItemWrapper = ({ children, last, opposite }) => (
  <TimelineItem>
    {opposite && (
      <TimelineOppositeContent>
        <Typography variant="subtitle2">{opposite}</Typography>
      </TimelineOppositeContent>
    )}
    <TimelineSeparator>
      <TimelineDot />
      {!last && <TimelineConnector />}
    </TimelineSeparator>
    <TimelineContent style={{ paddingLeft: 0 }}>{children}</TimelineContent>
  </TimelineItem>
)

const TimelineCard = ({ year, location, position, time, desc, link }) => {
  const classes = useStyles()
  return (
    <Card className={classes.card} variant="outlined">
      <CardContent>
        <Typography variant="h4">{location}</Typography>
        <Typography variant="h5">{position}</Typography>
        <Typography variant="body1">
          {desc}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardBottomRow}>
        <Button href={link} target="_blank" rel="noopener">
          learn more
        </Button>
        <Typography variant="subtitle1">
          {time}
        </Typography>
      </CardActions>
    </Card>
  )
}

const ExperienceTimeline = () => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <Timeline align="right" className={classes.timeline}>
        <TimelineItemWrapper>
          <Typography variant="h6">Birth</Typography>
        </TimelineItemWrapper>
        <TimelineItemWrapper>
          <TimelineCard
            year="2019"
            location="Windsor Dining Court"
            position="Student Associate"
            time="Sept 2019 - Nov 2019"
            desc="I cleaned, cooked, and served food in a dining court. Learned to deal with hungry people and hot things."
            link="https://dining.purdue.edu/ResidentialDining/locations/windsor.html"
          />
        </TimelineItemWrapper>
        <TimelineItemWrapper>
          <TimelineCard
            year="2020"
            location="Cognition and Learning Lab"
            position="Web Programmer"
            time="May 2020 - Present"
            desc="I work with psychology researchers to create browser experiments using jsPsych while also maintaining and documenting a mature experiment stack."
            link="https://jarvis.psych.purdue.edu/lab-website/"
          />
        </TimelineItemWrapper>
        <TimelineItem>
          <Typography variant="h6">Present</Typography>
        </TimelineItem>
      </Timeline>
    </div>
  )
}

export default ExperienceTimeline
