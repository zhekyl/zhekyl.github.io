import React from "react"

import indexStyles from "./index.module.css"
import SEO from "../components/seo"
import PageHeader from "../components/PageHeader"
import spin from "../images/spin.gif"
import Layout from "../components/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
// import resume from "../images/Resume.pdf"
import Fade from "react-reveal/Fade"

import ReactRotatingText from "react-rotating-text"

import MobileFramedImage from "../components/MobileFramedImage"

import stomp from "../images/stomp_cycle.png"
import Particles from "react-particles-js"


import gamesImg from "../images/games.png"
import webImg from "../images/web.png"

import buildingsImg from "../images/buildings.png"
import forkuImg from "../images/forku.png"
import grapevineImg from "../images/grapevine.png"
import hackerheroImg from "../images/hackerhero.png"


const IndexPage = () => {
  return (
    <>
      {/* <PageHeader sections={["about", "projects", "resume"]}></PageHeader> */}
      <Layout>
        <Particles
          className={indexStyles.particles}
          height={`100vh`}
          width={`100vw`}
          params={{
            particles: {
              number: {
                value: 13,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: "#d934bc",
              },
              shape: {
                type: "circle",
              },
              opacity: {
                value: 0.07,
                random: true,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 69,
                random: true,
                anim: {
                  enable: true,
                  speed: 10,
                  size_min: 40,
                  sync: false,
                },
              },
              move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
          }}
        />
        <SEO title="Home" />
        <div className={indexStyles.fullpage}>
          <div
            className={`${indexStyles.thinSection} ${indexStyles.homeContent}`}
          >
            <h1 id={indexStyles.name}>Kyle Zheng</h1>
            <div id={indexStyles.tagline}>
              <p>
                is
                <ReactRotatingText
                  items={[
                    "a developer",
                    "a cool guy in general",
                    "not like the other boys",
                  ]}
                  cursor={false}
                  className={indexStyles.rotatingText}
                  color={`crimson`}
                  emptyPause={250}
                  deletingInterval={25}
                />
              </p>
              {/* <span className={indexStyles.rotating}>
                <span>student</span>
                <span>developer</span>
                <span>cool guy in general</span>
              </span> */}
            </div>
          </div>
          <a className={indexStyles.bounce} href="#about">
            <FontAwesomeIcon
              icon={faChevronDown}
              className={indexStyles.bounceIcon}
            />
          </a>
        </div>
        <Fade left>
          <div className={indexStyles.sectionHeader}>
            <h1 id="about">About</h1>
          </div>
          <div className={indexStyles.thinSection}>
            <p>
              I'm currently studying{" "}
              <span className={indexStyles.highlight}>computer science</span>{" "}
              and <span className={indexStyles.highlight}>math</span> at Purdue
              University. I'm mostly working on dumb projects and occasionally
              some cool stuff also. The rest of the time I'm looking for new
              opportunities to grow, new ideas to{" "}
              <span className={indexStyles.strike}>copy</span> learn from, and
              new ways to use technology for questionable purposes.
            </p>
          </div>
        </Fade>

        <Fade up>
          <div>
            <div className={indexStyles.sectionHeader}>
              <h1 id="projects">Projects</h1>
            </div>
            <div className={indexStyles.wideSection}>
              <div
                className={indexStyles.wideSectionContent}
                style={{ backgroundColor: `#FF6F6140` }}
              >
                <h4>A Variety of Hypercasual Mobile Games</h4>
                <img src={gamesImg}/>
                <p>Built with the Unity game engine</p>
              </div>
            </div>
            {/* <MobileFramedImage image={{ stomp }}></MobileFramedImage> */}

            <div className={indexStyles.wideSection}>
              <div
                className={indexStyles.wideSectionContent}
                style={{ backgroundColor: `#6B5B9540` }}
              >
                <h4>Web Development</h4>
                <img src={webImg}/>
                <p>Build using modern and responsive frameworks</p>

              </div>
            </div>

            <div className={indexStyles.wideSection}>
              <div
                className={indexStyles.wideSectionContent}
                style={{ backgroundColor: `#88B04B40` }}
              >
                <h4>Hackathon Projects</h4>
                <img src={buildingsImg}/>
                <img src={forkuImg}/>
                <img src={grapevineImg}/>
                <img src={hackerheroImg}/>
                <p>Random crazy stuff</p>
              </div>
            </div>
          </div>
        </Fade>

        <Fade left>
          <div className={indexStyles.sectionHeader}>
            <h1 id="resume">Resume</h1>
          </div>
          <div className={indexStyles.thinSection}>
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
