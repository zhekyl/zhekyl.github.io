import React from "react"

import indexStyles from "./index.module.css"
import SEO from "../components/seo"
import IndexHeader from "../components/IndexHeader"
import spin from "../images/spin.gif"
import Layout from "../components/layout"

// import resume from "../images/Resume.pdf"
import Fade from 'react-reveal/Fade'

const IndexPage = () => {
  return (
    <>
    <IndexHeader></IndexHeader>
    <Layout>
      <SEO title="Home" />
      <div className={indexStyles.fullpage}>
        <div className={indexStyles.homeContent}>
          <h1 className={indexStyles.name}>Kyle Zheng</h1>
          <div id={indexStyles.tagline}>
            <p>is looking for </p>
            <span className={indexStyles.rotating}>
              <span>a cool new project.</span>
              <span>internship opportunities!</span>
              <span>love?</span>
            </span>
          </div>
        </div>
        <a className={indexStyles.bounce}>VowoV</a>
      </div>
      <Fade left>
          <div className={indexStyles.section}>
        <h1 id="about">About</h1>
        <h2>Education</h2>
        <p>
          Computer science + math at Purdue
        </p>

        <p>Relevant Coursework</p>

        <p>Skills</p>
        <li>Flutter</li>
        <li>React</li>
        <li>Unity</li>

        <h2>Experience</h2>
        <p>
          windsor dining court lmao
        </p>
        <p>
          Here is some relevant information that shows my personality and
          interests both within and outside of computer science.
        </p>
      </div>
      </Fade>
      <Fade right>
        <div className={indexStyles.section}>
        <h1 id="projects">Projects</h1>
        <p>KGG ? </p>
        <p>Purdue Buildings</p>
        <p>Grapevine</p>
        <p>Mobile / Android / Unity / Game</p>
        <p>Splodge, Rocket Run, Slyme, Stomp, Hacker Hero</p>
        <p>this website lmao</p>
      </div>
      </Fade>
      <Fade left>
        <div className={indexStyles.section}>
        <h1 id="resume">Resume</h1>
        <p>
          If I haven't scared you away yet, take a look at my resume!
        </p>
        <a href={'/resume.pdf'} target="_blank">See Resume</a>
      </div>
      </Fade>
      
    </Layout>
    </>
  )
}

export default IndexPage
