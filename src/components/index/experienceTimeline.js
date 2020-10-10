import React from "react"
import { Card, CardContent, Container, makeStyles, Typography } from "@material-ui/core"
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
  container:{
    maxWidth:600,
    margin:"auto",
  },
  timeline: {
    // margin:"auto",
    padding:0,
    "& li::before": {
      flex: "none",
      padding: 0,
    },
  },

  year:{
    writingMode:"vertical-lr"
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
    <TimelineContent style={{paddingLeft:0}}>{children}</TimelineContent>
  </TimelineItem>
)

const ExperienceTimeline = () => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <Timeline align="right" className={classes.timeline}>
        <TimelineItemWrapper>Birth</TimelineItemWrapper>
        <TimelineItemWrapper>
          <div style={{display:"flex", alignItems:"start"}}>
            <Typography variant="h2" className={classes.year}>
              2020
            </Typography>
          <Card>
            <CardContent>
              <Typography variant="h4">
                Purdue Cognition and Learning Laboratory
              </Typography>
              <Typography variant="h5">Web Programmer</Typography>
            </CardContent>
          </Card>
          </div>
          
        </TimelineItemWrapper>
      </Timeline>
    </div>
  )
}

export default ExperienceTimeline
