import React from "react"

import indexStyles from "./index.module.css"
import SEO from "../components/seo"
import IndexHeader from "../components/IndexHeader"
import spin from "../images/spin.gif"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <IndexHeader></IndexHeader>
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
        <a className={indexStyles.bounce}>henlo</a>
      </div>

      <div className={indexStyles.section}>

        <h1 id="about">About</h1>
        <p>I'm a first year majoring in computer science and math at Purdue.</p>
        <p>
          Here is some relevant information that shows my personality and
          interests both within and outside of computer science.
        </p>
        <p>
          Here is some relevant information that shows my personality and
          interests both within and outside of computer science.
        </p>
        <p>
          Here is some relevant information that shows my personality and
          interests both within and outside of computer science.
        </p>
        <p>
          Here is some relevant information that shows my personality and
          interests both within and outside of computer science.
        </p>
      </div>
      <div className={indexStyles.section}>
        <h1 id="projects">Projects</h1>
      </div>
      <div className={indexStyles.section}>
        <h1 id="resume">Resume</h1>
        <p>
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </Layout>
  )
}

export default IndexPage
