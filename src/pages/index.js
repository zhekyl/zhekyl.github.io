import React from "react"
import { graphql } from "gatsby"
// import Fade from "react-reveal/Fade"
import ReactRotatingText from "react-rotating-text"
// import Particles from "react-particles-js"
// import particleParams from "../assets/json/particleParams.json"
// import { Carousel } from "react-responsive-carousel"
// import "react-responsive-carousel/lib/styles/carousel.min.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faFile } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin, faDev } from "@fortawesome/free-brands-svg-icons"

import indexStyles from "./index.module.css"
import SEO from "../components/seo"
import Layout from "../components/layout"
import ProjectCard from "../components/projectCard"

// import gamesImg from "../assets/images/games.png"
// import webImg from "../assets/images/combined_view.png"
import buildingsImg from "../assets/images/buildings.png"
import forkuImg from "../assets/images/forku.png"
import grapevineImg from "../assets/images/grapevine.png"
import hackerheroImg from "../assets/images/hackerhero.png"

const IndexPage = ({ data }) => {
  return (
    <>
      <Layout>
        <SEO />
        <div>
          <div
            style={{
              display: `flex`,
              alignItems: `center`,
              justifyContent: `space-between`,
            }}
          >
            <h1>Kyle Zheng</h1>

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

        {/* <Fade up> */}
        <h1 id="about">Hey there!</h1>
        <div>
          <p>
            I'm currently studying{" "}
            <span className={indexStyles.highlight}>computer science</span> and{" "}
            <span className={indexStyles.highlight}>math</span> at Purdue
            University. I'm mostly working on dumb projects and occasionally
            some cool stuff also. The rest of the time I'm looking for new
            opportunities to grow, new ideas to{" "}
            <span className={indexStyles.strike}>shamelessly copy</span> learn
            from, and new ways to use technology for questionable purposes.
          </p>
        </div>
        {/* </Fade> */}

        {/* <Fade left> */}
        <h1 id="projects">Things I've worked on</h1>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <ProjectCard
            fluidImgSrc={data.kgg_website.childImageSharp.fluid}
            title="kgg.gg"
            style={{
              flex: 3,
              minWidth: 300,
            }}
          >
            Kappa Gamma Gamma is an inclusive gaming fraternity. Their website
            is really damn cool.
          </ProjectCard>
          <ProjectCard
            fluidImgSrc={data.mobile_games.childImageSharp.fluid}
            title="KGG"
            style={{
              flex: 2,
              minWidth: 200,
            }}
          >
            Here is some text for this thing
          </ProjectCard>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <ProjectCard
            fluidImgSrc={data.kgg_website.childImageSharp.fluid}
            title="KGG"
            style={{
              flex: 2,
              minWidth: 200,
            }}
          >
            Here is some text for this thing
          </ProjectCard>
          <ProjectCard
            fluidImgSrc={data.kgg_website.childImageSharp.fluid}
            title="KGG"
            style={{
              flex: 3,
              minWidth: 300,
            }}
          >
            Here is some text for this thing
          </ProjectCard>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div>
            <h4>Web Development</h4>
            {/* <img className={indexStyles.projectImg} src={webImg} /> */}
            <div>
              {"Check out -> "}
              <a
                href="https://www.kgg.gg"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.kgg.gg
              </a>
            </div>
          </div>

          <div>
            <h4>A Variety of Hypercasual Mobile Games</h4>
            {/* <img className={indexStyles.projectImg} src={gamesImg} /> */}
            <div>
              <a
                href="https://play.google.com/store/apps/developer?id=Cartic&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="Get it on Google Play"
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                />
              </a>
            </div>
          </div>
        </div>

        <h4>Hackathon Projects</h4>
        <div>
          {/* <Carousel
              infiniteLoop={true}
              dynamicHeight={true}
              showThumbs={false}
            > */}
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
            <p className="legend">Proximity based Bluetooth messaging app</p>
          </div>
          <div>
            <img src={hackerheroImg} />
            <p className="legend">Rhythm game using Youtube videos</p>
          </div>
          {/* </Carousel> */}
        </div>
        {/* </Fade> */}

        {/* <Fade up> */}
        <h1 id="resume">Still here?</h1>
        <div>
          <div style={{ width: `100%`, verticalAlign: `center` }}>
            <p>
              If you're interested, take a look at my{" "}
              <a
                className={indexStyles.linkButton}
                href="/Resume.pdf"
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
        {/* </Fade> */}
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query {
    kgg_website: file(relativePath: { eq: "kgg_website.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    mobile_games: file(relativePath: { eq: "mobile_games.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

export default IndexPage
