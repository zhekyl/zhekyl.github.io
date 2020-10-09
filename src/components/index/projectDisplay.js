import React from "react"
import { makeStyles, Typography } from "@material-ui/core"
import ProjectBlock from "../../components/projectBlock"

import projectData from "../../content/projectDisplay.yml"

const useStyles = makeStyles(theme => ({
  projectsRow: {
    display: "flex",
    flexWrap: "wrap",
  },
}))
// useStaticQuery has some bugs, so gatsby image queries are being sent down from the parent
// Hopefully replace with static queries when bugs resolved.
const ProjectDisplay = ({imageSources}) => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.projectsRow}>
        <ProjectBlock
          fluidImgSrc={imageSources.kgg_website.childImageSharp.fluid}
          title="kgg.gg"
          style={{
            flex: 3,
            minWidth: 300,
            // backgroundImage: "linear-gradient(-45deg, #DC143C99, #DC143C20)",
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
            minWidth: 200,
            // backgroundImage: "linear-gradient(-45deg, #AEF78E, #AEF78E20)",
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
            minWidth: 200,
            // backgroundImage: "linear-gradient(-45deg, #CAFFB9, #CAFFB920)",
          }}
        >
          Here is some text for this thing
        </ProjectBlock>
        <ProjectBlock
          fluidImgSrc={imageSources.kgg_website.childImageSharp.fluid}
          title="KGG"
          style={{
            flex: 3,
            minWidth: 300,
            // backgroundImage: "linear-gradient(-45deg, #66A182, #66A18220)",
          }}
        >
          Here is some text for this thing
        </ProjectBlock>
      </div>
    </>
  )
}

export default ProjectDisplay
