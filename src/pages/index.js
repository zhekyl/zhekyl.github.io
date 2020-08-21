import React from "react"

import Fade from "react-reveal/Fade"
import ReactRotatingText from "react-rotating-text"
import Particles from "react-particles-js"
import particleParams from "../assets/json/particleParams.json"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faFile } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin, faDev } from "@fortawesome/free-brands-svg-icons"

import indexStyles from "./index.module.css"
import SEO from "../components/seo"
import Layout from "../components/layout"

import gamesImg from "../assets/images/games.png"
import webImg from "../assets/images/combined_view.png"
import buildingsImg from "../assets/images/buildings.png"
import forkuImg from "../assets/images/forku.png"
import grapevineImg from "../assets/images/grapevine.png"
import hackerheroImg from "../assets/images/hackerhero.png"

const IndexPage = () => {
  return (
    <>
      <Layout>
        <Particles
          className={indexStyles.particles}
          height={`100vh`}
          width={`100vw`}
          params={particleParams}
        />
        <SEO title="Home" />
        <div className={indexStyles.fullpage}>
          <div
            className={`${indexStyles.thinSection} ${indexStyles.homeContent}`}
          >
            <div
              style={{
                display: `flex`,
                alignItems: `center`,
                justifyContent: `space-between`,
              }}
            >
              <h1 id={indexStyles.name}>Kyle Zheng</h1>

              <div style={{ textAlign: `right` }}>
                <a
                  className={indexStyles.iconButton}
                  href="https://github.com/zhengkyl"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  className={indexStyles.iconButton}
                  href="https://devpost.com/zhengkyl"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faDev} />
                </a>
                <a
                  className={indexStyles.iconButton}
                  href="https://www.linkedin.com/in/kyle-zheng-9b2546145/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
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
            </div>
          </div>
          <a className={indexStyles.bounce} href="#about">
            <FontAwesomeIcon
              icon={faChevronDown}
              className={indexStyles.bounceIcon}
            />
          </a>
        </div>
        <Fade up>
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

        <Fade left>
          <div className={indexStyles.sectionHeader}>
            <h1 id="projects">Projects</h1>
          </div>
          <div className={indexStyles.wideSection}>
            <div
              className={indexStyles.wideSectionContent}
              style={{ backgroundColor: `#FF6F6110` }}
            >
              <h4>A Variety of Hypercasual Mobile Games</h4>
              <div className={indexStyles.flexContent}>
                <img className={indexStyles.projectImg} src={gamesImg} />
                <div className={indexStyles.projectDesc}>
                  <ul>
                    <li>C# in the Unity game engine</li>
                    <li>Vector graphics with Inkscape</li>
                    <li>3d modeling and animation with Blender</li>
                    <li>Dubious game design</li>
                  </ul>
                  <a
                    href="https://play.google.com/store/apps/developer?id=Cartic&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
                    target="_blank"
                  >
                    <img
                      alt="Get it on Google Play"
                      src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={indexStyles.wideSection}>
            <div
              className={indexStyles.wideSectionContent}
              style={{ backgroundColor: `#6B5B9510` }}
            >
              <h4>Web Development</h4>
              <div className={indexStyles.flexContent}>
                <div className={indexStyles.projectDesc}>
                  <ul>
                    <li>React frameworks such as Gatsby, Next.js</li>
                    <li>Styling with Material UI, Bootstrap</li>
                    <li>Jekyll, Mkdocs, Docusaurus for blog-like content</li>
                    <li>Custom vector graphics <span style={{whiteSpace:"nowrap"}}>(͠≖ ͜ʖ͠≖)👌</span></li>
                    <li>Advanced centering of divs</li>
                  </ul>
                </div>
                <img className={indexStyles.projectImg} src={webImg} />
              </div>
            </div>
          </div>

          <div className={indexStyles.wideSection}>
            <div
              className={indexStyles.wideSectionContent}
              style={{ backgroundColor: `#88B04B10` }}
            >
              <h4>Hackathon Projects</h4>
              <div>
                <Carousel
                  infiniteLoop={true}
                  dynamicHeight={true}
                  showThumbs={false}
                >
                  <div>
                    <img src={buildingsImg} />
                    <p className="legend">
                      Indoor pathfinding/navigation using node maps
                    </p>
                  </div>
                  <div>
                    <img src={forkuImg} />
                    <p className="legend">Fork crowdshare service concept</p>
                  </div>
                  <div>
                    <img src={grapevineImg} />
                    <p className="legend">
                      Proximity based Bluetooth messaging app
                    </p>
                  </div>
                  <div>
                    <img src={hackerheroImg} />
                    <p className="legend">Rhythm game using Youtube videos</p>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </Fade>

        <Fade up>
          <div className={indexStyles.sectionHeader}>
            <h1 id="resume">Still here?</h1>
          </div>
          <div className={indexStyles.thinSection}>
            <div style={{ width: `100%`, verticalAlign: `center` }}>
              <p>
                If you're interested, take a look at my{" "}
                <a
                  className={indexStyles.linkButton}
                  href="/resume.pdf"
                  target="_blank"
                >
                  resume <FontAwesomeIcon icon={faFile} />
                </a>
              </p>
            </div>
            <div
              style={{
                display: `flex`,
                justifyContent: `flex-end`,
              }}
            >
              <div style={{ textAlign: `right` }}>
                <a
                  className={indexStyles.iconButton}
                  href="https://github.com/zhengkyl"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  className={indexStyles.iconButton}
                  href="https://devpost.com/zhengkyl"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faDev} />
                </a>
                <a
                  className={indexStyles.iconButton}
                  href="https://www.linkedin.com/in/kyle-zheng-9b2546145/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
          </div>
        </Fade>
      </Layout>
    </>
  )
}

export default IndexPage
