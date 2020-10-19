import React from "react"
import { Avatar, Chip, makeStyles, Typography } from "@material-ui/core"
import avatarSrc from "../assets/images/avatar.jpg"
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
    // display:'flex',
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
      –
      <Chip
        variant="outlined"
        avatar={<Avatar src={avatarSrc} />}
        label={subtext}
        size="small"
      />
    </div>
  )
}

export default QuoteHeader
