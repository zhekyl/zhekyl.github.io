import React from "react"
import { makeStyles, Typography } from "@material-ui/core"
import ProjectBlock from "../../components/projectBlock"

import projectData from "../../content/projectDisplay.yml"
import BubbleSvg from "../../assets/svgs/bubbles.svg"

const useStyles = makeStyles(theme => ({
  projectsRow: {
    "& > div": {
      marginBottom:theme.spacing(4),
    },
    [theme.breakpoints.up("sm")]:{
      // flexWrap: "wrap",
      display: "flex",
      "& > div:first-child": {
        marginRight:theme.spacing(4),
      },
    }
  },
  bubbles:{
    position:"absolute",
    zIndex:-1,
  }
}))
// useStaticQuery has some bugs, so gatsby image queries are being sent down from the parent
// Hopefully replace with static queries when bugs resolved.
const ProjectDisplay = ({imageSources}) => {
  const classes = useStyles()
  return (
    <div>
      {/* <BubbleSvg className={classes.bubbles}/> */}
      <div className={classes.projectsRow}>
        <ProjectBlock
          fluidImgSrc={imageSources.kgg_website.childImageSharp.fluid}
          title="kgg.gg"
          style={{
            flex: 3,
            color: "crimson",
          }}
        >
          Kappa Gamma Gamma is an inclusive gaming fraternity. Their website is
          really damn cool.
          <a
            href="https://www.kgg.gg"
            target="_blank"
            rel="noopener noreferrer"
          >
            kgg
          </a>
        </ProjectBlock>
        <ProjectBlock
          fluidImgSrc={imageSources.mobile_games.childImageSharp.fluid}
          title="KGG"
          style={{
            flex: 2,
            alignSelf: "flex-end",
          }}
        >
          Here is some text for this thing. a;dsjf; a as dfasd fawej f'asdf asf
          awe sd f aew a sdf awef asef
        </ProjectBlock>
      </div>
      <div className={classes.projectsRow}>
        <ProjectBlock
          fluidImgSrc={imageSources.kgg_website.childImageSharp.fluid}
          title="KGG"
          style={{
            flex: 2,
          }}
        >
          Here is some text for this thing
        </ProjectBlock>
        <ProjectBlock
          fluidImgSrc={imageSources.kgg_website.childImageSharp.fluid}
          title="KGG"
          style={{
            flex: 3,
          }}
        >
          Here is some text for this thing
        </ProjectBlock>
      </div>
    </div>
  )
}

export default ProjectDisplay
