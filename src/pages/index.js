import React from "react"
import { graphql } from "gatsby"
// import Fade from "react-reveal/Fade"
import ReactRotatingText from "react-rotating-text"

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faChevronDown, faFile } from "@fortawesome/free-solid-svg-icons"
// import { faGithub, faLinkedin, faDev } from "@fortawesome/free-brands-svg-icons"

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
import { Button, IconButton, makeStyles, Typography } from "@material-ui/core"

import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from '@material-ui/icons/GitHub';


import ResumeIcon from "@material-ui/icons/Description"
import ExperienceTimeline from "../components/index/experienceTimeline"
import QuoteHeader from "../components/quoteHeader"

const useStyles = makeStyles(theme => ({}))
const IndexPage = ({ data }) => {
  const classes = useStyles()
  return (
    <>
      <Layout>
        <SEO title="test title" />
        <div>
          <Typography variant="h1">Kyle Zheng</Typography>

          <Button variant="outlined">About</Button>
          <Button variant="outlined">Experience</Button>
          <Button variant="outlined">Projects</Button>
          <Button variant="outlined">Resume</Button>

        <IconButton>
          <GitHubIcon fontSize="large"/>
        </IconButton>
        <IconButton>
          <LinkedInIcon fontSize="large"/>
        </IconButton>
          {/* href="https://github.com/zhengkyl"
                href="https://devpost.com/zhengkyl"

                href="https://www.linkedin.com/in/kyle-zheng-9b2546145/" */}
        </div>

        <QuoteHeader
          title="Not like the other boys"
          subtext="-me, 2020"
          id="about"
        />

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

        <QuoteHeader
          right
          title="Loves paying income taxes"
          subtext="-me, 2020"
          id="experience"
        />
        <ExperienceTimeline />

        <QuoteHeader
          title="Unbelievably amazing projects"
          subtext="-me, 2020"
          id="projects"
        />
        <ProjectDisplay imageSources={data} />

        <QuoteHeader
          right
          title="Believably amazing projects"
          subtext="-me, 2020"
          id="projects2"
        />
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

        <QuoteHeader
          title="If I could, I'd hire him twice!"
          subtext="-me, 2020"
          id="hire"
        />

        <div>
          <Typography variant="body1">
            I'm currently looking for internships for Summer 2021.
          </Typography>
        </div>
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
