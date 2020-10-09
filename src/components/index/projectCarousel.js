import React from "react"
import { makeStyles, Typography } from "@material-ui/core"
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"
import ProjectCard from "../projectCard"

import projectData from "../../content/projectCarousel.yml"
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIos';
const useStyles = makeStyles(theme => ({
  button: {
    borderRadius:"50%",
    padding:theme.spacing(1.5),
    margin:theme.spacing(1),
    border:"none",
    display:"flex"
  },
}))
// useStaticQuery has some bugs, so gatsby image queries are being sent down from the parent
// Hopefully replace with static queries when bugs resolved.
const ProjectCarousel = ({ imageSources }) => {
  console.log(imageSources)
  const classes = useStyles()
  return (
    <CarouselProvider
      totalSlides={4}
      visibleSlides={2}
      // infinite={true}
      // naturalSlideWidth={100}
      // naturalSlideHeight={125}
      isIntrinsicHeight={true}
      style={{display:"flex", alignItems:"center"}}
    >
      <ButtonBack className={classes.button}><ArrowForwardIcon style={{transform:"rotate(180deg)"}}/></ButtonBack>
      <Slider>
        {projectData.top.map((project, index) => {
          let project2 = projectData.bottom[index]
          return (
            <Slide index={index}>
              <ProjectCard
                title={project.title}
                fluidImgSrc={
                  imageSources[project.name]
                    ? imageSources[project.name].childImageSharp.fluid
                    : null
                }
                githubLink={project.github}
              >
                {project.desc}
              </ProjectCard>
              <ProjectCard
                title={project2.title}
                fluidImgSrc={
                  imageSources[project2.name]
                    ? imageSources[project2.name].childImageSharp.fluid
                    : null
                }
                githubLink={project2.github}
              >
                {project2.desc}
              </ProjectCard>
            </Slide>
          )
        })}
      </Slider>
      <ButtonNext className={classes.button}><ArrowForwardIcon/></ButtonNext>
    </CarouselProvider>
  )
}

export default ProjectCarousel
