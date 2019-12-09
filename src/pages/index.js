import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import indexStyles from "./index.module.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageSection from "../components/PageSection"
import ScrollLayout from "../components/ScrollLayout"
import Header from "../components/Header"

const IndexPage = ({ location }) => {
  // const [section, setSection] = useState("main")

  useEffect(() => {
    if (location.state != null) {
      // console.log(location)
      // console.log(location.state.section)
      document.getElementById(location.state.section).scrollIntoView({behavior: 'smooth'})
    }
    // setSection(data.section)
  })
  // if(data.state.sectionTitle!=null){

  // }
  return (
    <ScrollLayout>
      <Header>

      </Header>
      <SEO title="Home" />
      <PageSection>
        <p>I'm</p>
        <h1 className={indexStyles.name}>Kyle Zheng</h1>
        <div className={indexStyles.rotating}>
          <span>a cool new project</span>
          <span>internship opportunities</span>
          <span>love?</span>
        </div>
      </PageSection>

      <PageSection>
        <h1 id="about">About</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </PageSection>
      <PageSection>
        <h1 id="projects">Projects</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </PageSection>
      <PageSection>
        <h1 id="resume">Resume</h1>
        <p>
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </PageSection>
    </ScrollLayout>
  )
}

export default IndexPage
