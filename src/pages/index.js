import React from "react"

import indexStyles from "./index.module.css"
import SEO from "../components/seo"
import PageHeader from "../components/PageHeader"
import spin from "../images/spin.gif"
import Layout from "../components/layout"

// import resume from "../images/Resume.pdf"
import Fade from "react-reveal/Fade"

const IndexPage = () => {
  return (
    <>
      {/* <PageHeader sections={["about", "projects", "resume"]}></PageHeader> */}
      <Layout>
        <SEO title="Home" />
        <div className={indexStyles.fullpage}>
          <div className={indexStyles.homeContent}>
            <h1 id={indexStyles.name}>Kyle Zheng</h1>
            <div id={indexStyles.tagline}>
              <p>I am a </p>
              <span className={indexStyles.rotating}>
                <span>student</span>
                <span>developer</span>
                <span>cool guy in general</span>
              </span>
            </div>
          </div>
          <a className={indexStyles.bounce}>owo</a>
        </div>
        <Fade left>
          <div className={indexStyles.thinSection}>
            <h1 id="about">About</h1>
            <p>
              I'm currently studying{" "}
              <span className={indexStyles.highlight}>computer science</span>{" "}
              and <span className={indexStyles.highlight}>math</span> at Purdue
              University. My programming experience can be described as "working
              on dumb projects and also some cool stuff occasionally." I'm
              always looking for new opportunities to grow, new ideas to{" "}
              <span className={indexStyles.strike}>copy</span> learn from, and
              new ways to use technology for questionable purposes.
            </p>

            {/* <p>
              Although I'm just getting started, I have the most experience in
              mobile development using Flutter, Unity, as well as native
              Android. I've also dabbled in web development, but I look forward
              to broadening my experience and skills.
            </p> */}
          </div>
        </Fade>

        <Fade up>
          <h1 id="projects">Projects</h1>
          <div>
            <div
              className={indexStyles.wideSection}
              style={{ backgroundColor: `#FF6F61` }}
            >
              <div className={indexStyles.wideSectionContent}>
                <h4>A Variety of Hypercasual Mobile Games</h4>
                <p>Built with the Unity game engine</p>
                <p>Splodge, Rocket Run, Slyme, Stomp, Hacker Hero</p>
              </div>
            </div>

            <div
              className={indexStyles.wideSection}
              style={{ backgroundColor: `#6B5B95` }}
            >
              <div className={indexStyles.wideSectionContent}>
                <h4>Web Development</h4>
                <p>Build using modern and responsive frameworks</p>
                <p>KGG.wtf, kylezheng.tech</p>
              </div>
            </div>

            <div
              className={indexStyles.wideSection}
              style={{ backgroundColor: `#88B04B` }}
            >
              <div className={indexStyles.wideSectionContent}>
                <h4>Hackathon Projects</h4>
                <p>Random crazy stuff</p>
                <p>Purdue Buildings, Grapevine, Hacker Hero</p>
              </div>
            </div>
          </div>
        </Fade>

        <Fade left>
          <div className={indexStyles.thinSection}>
            <h1 id="resume">Resume</h1>
            <p>If I haven't scared you away yet, take a look at my resume!</p>
            <a href={"/resume.pdf"} target="_blank">
              See Resume
            </a>
          </div>
        </Fade>
      </Layout>
    </>
  )
}

export default IndexPage
