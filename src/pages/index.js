import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"

import QuoteHeader from "../components/quoteHeader"
import AboutArea from "../components/index/aboutArea"
import ExperienceTimeline from "../components/index/experienceTimeline"
import ProjectDisplay from "../components/index/projectDisplay"
import ProjectCarousel from "../components/index/projectCarousel"
import ProfileCard from "../components/profileCard"

import {
  Button,
  Card,
  CardContent,
  Container,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  profiles: {
    display: "flex",
    justifyContent: "space-evenly",
    "& > :last-child": {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "unset",
      },
    },
  },
  navButton: {
    // backgroundColor:theme.palette.primary.light,
    // boxShadow:'',
  },
  highlight: {
    color: theme.palette.primary.main,
  },
}))
const IndexPage = ({ data }) => {
  const classes = useStyles()
  return (
    <>
      <SEO title="test title" />
      <div>
        <Typography variant="h1">Kyle Zheng</Typography>
        {/* <ProfileCard imgSrc={data.profile3.childImageSharp.fluid}/> */}

        <Button
          size="large"
          color="primary"
          variant="outlined"
          className={classes.navButton}
        >
          About
        </Button>
        <Button
          size="large"
          color="primary"
          variant="outlined"
          className={classes.navButton}
        >
          Experience
        </Button>
        <Button
          size="large"
          color="primary"
          variant="outlined"
          className={classes.navButton}
        >
          Projects
        </Button>
        <Button
          size="large"
          color="primary"
          variant="outlined"
          className={classes.navButton}
        >
          Resume
        </Button>

        {/* href="https://github.com/zhengkyl"
                href="https://devpost.com/zhengkyl"

                href="https://www.linkedin.com/in/kyle-zheng-9b2546145/" */}
      </div>

      <QuoteHeader
        title="Not like the other boys"
        subtext="😤🔨😤😈"
        id="about"
      />
      <AboutArea imageSources={data}/>

      <QuoteHeader
        right
        title="Loves paying income taxes"
        subtext="🔥💰🍞💰🤑"
        id="experience"
      />
      <ExperienceTimeline />

      <QuoteHeader
        title="Unbelievably amazing projects"
        subtext="🤯🏆🥇😱"
        id="projects"
      />
      <ProjectDisplay imageSources={data} />

      <QuoteHeader
        right
        title="Believably amazing projects"
        subtext="🤡😌"
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
        subtext="🙏🙏😔"
        id="hire"
      />
      <div className={classes.profiles}>
        <ProfileCard imgSrc={data.profile5.childImageSharp.fluid} />
        <ProfileCard imgSrc={data.profile4.childImageSharp.fluid} />
      </div>
    </>
  )
}

export const pageQuery = graphql`
  query {
    kyle_wires: file(relativePath: { eq: "kyle_wires.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    kyle_flowers: file(relativePath: { eq: "kyle_flowers.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    kyle_focus: file(relativePath: { eq: "kyle_focus.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    kyle_cardboard: file(relativePath: { eq: "kyle_cardboard.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    kgg_website: file(relativePath: { eq: "projects/kgg_website.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    mobile_games: file(relativePath: { eq: "projects/mobile_games.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    profile_tall: file(relativePath: { eq: "profile_tall.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    avatar: file(relativePath: { eq: "avatar.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    profile1: file(relativePath: { eq: "profile1.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    profile2: file(relativePath: { eq: "profile2.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    profile3: file(relativePath: { eq: "profile3.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    profile4: file(relativePath: { eq: "profile4.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    profile5: file(relativePath: { eq: "profile5.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

export default IndexPage
