import React from "react"
import {
  makeStyles,
  Typography,
} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(16),
    marginBottom: theme.spacing(8),
  },
  avatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    display: "inline-block",
    verticalAlign: "middle",
  },
  subtitle: {
    verticalAlign: "middle",
  },
}))
const QuoteHeader = ({ right, title, subtext, id }) => {
  const classes = useStyles()
  return (
    <div
      id={id}
      style={right && { textAlign: "right" }}
      className={classes.container}
    >
      <Typography variant="h2">{title}</Typography>
      <Typography variant="h5" component="span">{subtext}</Typography>
    </div>
  )
}

export default QuoteHeader
