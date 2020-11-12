import React from "react"
import { makeStyles, Typography } from "@material-ui/core"
import ProjectBlock from "../../components/projectBlock"

import projectData from "../../content/projectDisplay.yml"
import BubbleSvg from "../../assets/svgs/bubbles.svg"

const useStyles = makeStyles(theme => ({
  projectsRow: {
    "& > div": {
      marginBottom: theme.spacing(4),
    },
    [theme.breakpoints.up("sm")]: {
      // flexWrap: "wrap",
      display: "flex",
      "& > div:first-child": {
        marginRight: theme.spacing(4),
      },
    },
  },
  bubbles: {
    position: "absolute",
    zIndex: -1,
  },
}))
// useStaticQuery has some bugs, so gatsby image queries are being sent down from the parent
// Hopefully replace with static queries when bugs resolved.
const ProjectDisplay = ({ imageSources }) => {
  const classes = useStyles()
  return (
    <div>
      {/* <BubbleSvg className={classes.bubbles}/> */}
      <div className={classes.projectsRow}>
        <ProjectBlock
          fluidImgSrc={imageSources[projectData[0].name].childImageSharp.fluid}
          title={projectData[0].title}
          style={{
            flex: 3,
          }}
          githubLink={projectData[0].github}
          linkTitle={projectData[0].linkTitle}
          link={projectData[0].link}
        >
          {projectData[0].desc}
        </ProjectBlock>
        <ProjectBlock
          fluidImgSrc={imageSources[projectData[1].name].childImageSharp.fluid}
          title={projectData[1].title}
          style={{
            flex: 2,
            alignSelf: "flex-end",
          }}
          githubLink={projectData[1].github}
          linkTitle={projectData[1].linkTitle}
          link={projectData[1].link}
        >
          {projectData[1].desc}
          <br />
          <a href="https://www.pranandarao.com" target="_blank" rel="noopener">
            @pranandarao
          </a>{" "}
          <a href="https://richz.li" target="_blank" rel="noopener">
            @richzli
          </a>
        </ProjectBlock>
      </div>
      <div className={classes.projectsRow}>
        <ProjectBlock
          fluidImgSrc={imageSources[projectData[2].name].childImageSharp.fluid}
          title={projectData[2].title}
          style={{
            flex: 2,
          }}
          githubLink={projectData[2].github}
          linkTitle={projectData[2].linkTitle}
          link={projectData[2].link}
        >
          {projectData[2].desc}
        </ProjectBlock>
        <ProjectBlock
          fluidImgSrc={imageSources[projectData[3].name].childImageSharp.fluid}
          title={projectData[3].title}
          style={{
            flex: 3,
          }}
          githubLink={projectData[3].github}
          linkTitle={projectData[3].linkTitle}
          link={projectData[3].link}
        >
          {projectData[3].desc}
        </ProjectBlock>
      </div>
    </div>
  )
}

export default ProjectDisplay
