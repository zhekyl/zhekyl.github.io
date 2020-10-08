import React from "react"
import { graphql } from "gatsby"
// import Fade from "react-reveal/Fade"
import ReactRotatingText from "react-rotating-text"
// import Particles from "react-particles-js"
// import particleParams from "../assets/json/particleParams.json"

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faFile } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin, faDev } from "@fortawesome/free-brands-svg-icons"

import indexStyles from "./index.module.css"
import SEO from "../components/seo"
import Layout from "../components/layout"
import ProjectCard from "../components/projectCard"
import ProjectBlock from "../components/projectBlock"

// import gamesImg from "../assets/images/games.png"
// import webImg from "../assets/images/combined_view.png"
import buildingsImg from "../assets/images/buildings.png"
import forkuImg from "../assets/images/forku.png"
import grapevineImg from "../assets/images/grapevine.png"
import hackerheroImg from "../assets/images/hackerhero.png"
import { makeStyles, Typography } from "@material-ui/core"
const useStyles = makeStyles(theme => ({
  projectsRow: {
    display: "flex",
    flexWrap: "wrap",
  },
}))
const IndexPage = ({ data }) => {
  const classes = useStyles()
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

        <div style={{ textAlign: "right" }}>
          <Typography variant="h2" id="about">
            Decades of life experience
          </Typography>
          <Typography variant="subtitle2" component="span">
            -me, 2020
          </Typography>
        </div>

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

        <div>
          <Typography variant="h2" id="projects">
            Unbelievably amazing projects
          </Typography>
          <Typography variant="subtitle2" component="span">
            -me, 2020
          </Typography>
        </div>

        <div className={classes.projectsRow}>
          <ProjectBlock
            fluidImgSrc={data.kgg_website.childImageSharp.fluid}
            title="kgg.gg"
            style={{
              flex: 3,
              minWidth: 300,
              // backgroundImage: "linear-gradient(-45deg, #DC143C99, #DC143C20)",
              color: "crimson",
            }}
          >
            Kappa Gamma Gamma is an inclusive gaming fraternity. Their website
            is really damn cool.
            <a
              href="https://www.kgg.gg"
              target="_blank"
              rel="noopener noreferrer"
            >
              kgg
            </a>
          </ProjectBlock>
          <ProjectBlock
            fluidImgSrc={data.mobile_games.childImageSharp.fluid}
            title="KGG"
            style={{
              flex: 2,
              minWidth: 200,
              // backgroundImage: "linear-gradient(-45deg, #AEF78E, #AEF78E20)",
              alignSelf: "flex-end",
            }}
          >
            Here is some text for this thing. a;dsjf; a as dfasd fawej f'asdf
            asf awe sd f aew a sdf awef asef
          </ProjectBlock>
        </div>
        <div className={classes.projectsRow}>
          <ProjectBlock
            fluidImgSrc={data.kgg_website.childImageSharp.fluid}
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
            fluidImgSrc={data.kgg_website.childImageSharp.fluid}
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
        <div style={{ textAlign: "right" }}>
          <Typography variant="h2" id="about">
            Believably amazing projects
          </Typography>
          <Typography variant="subtitle2" component="span">
            -me, 2020
          </Typography>
        </div>

        <CarouselProvider
          totalSlides={4}
          visibleSlides={2}
          // naturalSlideWidth={100}
          // naturalSlideHeight={125}
          isIntrinsicHeight={true}
          // style={{maxWidth:500}}
        >
          <Slider>
            <Slide index={0}>
              
            </Slide>
            <Slide index={1}>
              <ProjectCard
                title="project mini"
                fluidImgSrc={data.kgg_website.childImageSharp.fluid}
              >
                test 1
              </ProjectCard>
            </Slide>
            <Slide index={2}>
              <ProjectCard
                title="project mini"
                fluidImgSrc={data.kgg_website.childImageSharp.fluid}
              >
                test 1
              </ProjectCard>
            </Slide>
            <Slide index={3}>
              <ProjectCard
                title="project mini"
                fluidImgSrc={data.kgg_website.childImageSharp.fluid}
              >
                test 1
              </ProjectCard>
            </Slide>
          </Slider>
        </CarouselProvider>

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

        {/* <h4>Hackathon Projects</h4>
        <div>
          <img src={buildingsImg} />
          <img src={forkuImg} />
          <img src={grapevineImg} />
          <img src={hackerheroImg} />
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
