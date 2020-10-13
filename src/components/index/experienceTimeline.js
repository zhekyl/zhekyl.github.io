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

const TimelineCard = ({ year, location, position }) => {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h4">{location}</Typography>
        <Typography variant="h5">{position}</Typography>
        <Typography variant="body1">
          hello there this is the boyd of the doaijfa and this is waht i did
          there for your info
        </Typography>
      </CardContent>
      <CardActions className={classes.cardBottomRow}>
        <Button>
          learn more
        </Button>
        <Typography variant="subtitle1">
          May 2020 - Current
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
          />
        </TimelineItemWrapper>
        <TimelineItemWrapper>
          <TimelineCard
            year="2020"
            location="Cognition and Learning Lab"
            position="Web Programmer"
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
