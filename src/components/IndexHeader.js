
import React from "react"

const SectionLink = ( {sectionTitle} ) => (
  <h3
    style={{
      margin: 0,
      display: `inline-block`,
      padding: `.5em 2em`,
      color: `black`,
      textDecoration: `none`,
   }}>
    <a
      onClick={
        ()=>document.getElementById(sectionTitle).scrollIntoView()
      }
    >{sectionTitle}</a>
  </h3>
)

const IndexHeader = () => (
  <header
    style={{
      marginBottom: `1.45rem`,
      position: `fixed`,
      width: `100vw`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        textAlign: `center`,
      }}
    >
      <SectionLink sectionTitle="about"></SectionLink>
      <SectionLink sectionTitle="projects"></SectionLink>
      <SectionLink sectionTitle="resume"></SectionLink>
    </div>
  </header>
)

export default IndexHeader
