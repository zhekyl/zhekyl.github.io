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
  highlight: {
    color: theme.palette.primary.main,
  },
  intro:{
    marginTop:64,
    marginBottom:256,
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    alignItems:"center",
    [theme.breakpoints.up("md")]:{
      flexDirection:"row"
    }
  },
  text:{
    width:"100%",
    marginBottom:64,
    [theme.breakpoints.up("md")]:{
      width:"unset"
    }
  },
  myCard:{
    [theme.breakpoints.up("md")]:{
      marginRight:96,
      marginLeft:96
    }
  }
}))
const IndexPage = ({ data }) => {
  const classes = useStyles()
  return (
    <>
      <SEO title="Home" />
      <div className={classes.intro}>
        <div className={classes.text}>
          <Typography variant="h1">Hello there.</Typography>
          <Typography variant="h3">It's me, Kyle Zheng.</Typography>
        </div>

        <div className={classes.myCard}>
          <ProfileCard imgSrc={data.profile5.childImageSharp.fluid} title="My Info">
            I'm currently looking for Summer 2021 internships, but feel free to reach out for any reason!
          </ProfileCard>
        </div>
      </div>

      <QuoteHeader
        title="Not like the other boys"
        subtext="😤🔨😤😈"
        id="about"
      />
      <AboutArea imageSources={data} />

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

      <QuoteHeader
        title="If I could, I'd hire him twice!"
        subtext="🙏🙏😔"
        id="contact"
      />
        <ProfileCard imgSrc={data.profile5.childImageSharp.fluid} title="Get in touch" >
          You can find my most up-to-date contact info on my resume. You can also check out my LinkedIn and Github below.
        </ProfileCard>
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
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    farmassist: file(relativePath: { eq: "projects/farmassist.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    mobile_games: file(relativePath: { eq: "projects/mobile_games.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    movielo: file(relativePath: { eq: "projects/movielo.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
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
    profile: file(relativePath: { eq: "profile.png" }) {
      childImageSharp {
        fixed(width:300) {
          ...GatsbyImageSharpFixed
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
