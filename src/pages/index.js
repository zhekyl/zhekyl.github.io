import React from "react"
import { graphql } from "gatsby"
// import Fade from "react-reveal/Fade"
import ReactRotatingText from "react-rotating-text"
// import Particles from "react-particles-js"
// import particleParams from "../assets/json/particleParams.json"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faFile } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin, faDev } from "@fortawesome/free-brands-svg-icons"

import indexStyles from "./index.module.css"
import SEO from "../components/seo"
import Layout from "../components/layout"
import ProjectCarousel from "../components/index/ProjectCarousel"
import ProjectDisplay from "../components/index/projectDisplay"

// import gamesImg from "../assets/images/games.png"
// import webImg from "../assets/images/combined_view.png"
import buildingsImg from "../assets/images/buildings.png"
import forkuImg from "../assets/images/forku.png"
import grapevineImg from "../assets/images/grapevine.png"
import hackerheroImg from "../assets/images/hackerhero.png"
import { makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({}))
const IndexPage = ({ data }) => {
  const classes = useStyles()
  return (
    <>
      <Layout>
        <SEO title="test title" />
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

        <div>
          <Typography variant="h2" id="projects">
            Not like the other boys
          </Typography>
          <Typography variant="subtitle2" component="span">
            -me, 2020
          </Typography>
        </div>

        <Typography variant="body1">
          I am a heterosexual asian male studying{" "}
          <span className={indexStyles.highlight}>computer science</span> and{" "}
          <span className={indexStyles.highlight}>math</span> at Purdue
          University.
        </Typography>

        <Typography variant="body1">
          When I'm not subverting societal expectations and defying gender
          norms, I'm mostly working on dumb projects or thinking about dumber
          projects to start.
        </Typography>

        <div style={{ textAlign: "right" }}>
          <Typography variant="h2" id="about">
            Loves paying income taxes
          </Typography>
          <Typography variant="subtitle2" component="span">
            -me, 2020
          </Typography>
        </div>

        <div>
          <Typography variant="body1">
            Purdue Cognition and Learning Laboratory - Web Programmer
          </Typography>
        </div>

        <div>
          <Typography variant="h2" id="projects">
            Unbelievably amazing projects
          </Typography>
          <Typography variant="subtitle2" component="span">
            -me, 2020
          </Typography>
        </div>

        <ProjectDisplay imageSources={data} />

        <div style={{ textAlign: "right" }}>
          <Typography variant="h2" id="about">
            Believably amazing projects
          </Typography>
          <Typography variant="subtitle2" component="span">
            -me, 2020
          </Typography>
        </div>

        <ProjectCarousel imageSources={data} />

        {/* <div>
            <h4>A Variety of Hypercasual Mobile Games</h4>
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
          </div> */}

        <div>
          <Typography variant="h2" id="projects">
            If I could, I'd hire him twice!
          </Typography>
          <Typography variant="subtitle2" component="span">
            -me, 2020
          </Typography>
        </div>
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
