import React from "react"
import {
  Card,
  CardContent,
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

const TimelineCard = ({year, location, position}) => (
  <div
    style={{
      display: "flex",
      alignItems: "start",
      justifyContent: "space-between",
    }}
  >
    {year && <Typography variant="h4" style={{writingMode: "vertical-lr",}}>
      {year}
    </Typography>}
    <Card>
      <CardContent>
        <Typography variant="h4" style={{textAlign:"left"}}>{location}</Typography>
        <Typography variant="h5">{position}</Typography>
      </CardContent>
    </Card>
  </div>
)

const useStyles = makeStyles(theme => ({
  container: {
    maxWidth: 600,
    margin: "auto",
  },
  timeline: {
    // margin:"auto",
    padding: 0,
    "& li::before": {
      flex: "none",
      padding: 0,
    },
  },
}))
const ExperienceTimeline = () => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <Timeline align="right" className={classes.timeline}>
        <TimelineItemWrapper>
          <Typography variant="h6">Birth</Typography>
        </TimelineItemWrapper>
        <TimelineItemWrapper>
          <TimelineCard year="2019" location="Windsor Dining Court" position="Student Associate"/>
        </TimelineItemWrapper>
        <TimelineItemWrapper>
          <TimelineCard year="2020" location = "Cognition and Learning Lab" position = "Web Programmer"/>
        </TimelineItemWrapper>
        <TimelineItem>
          <Typography variant="h6">Present</Typography>
        </TimelineItem>
      </Timeline>
    </div>
  )
}

export default ExperienceTimeline
