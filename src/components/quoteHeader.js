import React from "react"
import { makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles((theme)=>({
  container:{
    marginTop:theme.spacing(16),
    marginBottom:theme.spacing(8)
  }
}))
const QuoteHeader = ({ right, title, subtext, id }) => {
  const classes = useStyles()
  return <div id={id} style={right && { textAlign: "right" }} className={classes.container}>
    <Typography variant="h2">
      {title}
    </Typography>
    <Typography variant="subtitle2" component="span">
      {subtext}
    </Typography>
  </div>
}

export default QuoteHeader
