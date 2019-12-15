
import React from "react"

const SectionLink = ( {sectionTitle} ) => (
  <h3
    style={{
      margin: 0,
      display: `inline-block`,
      padding: `.5em 1em`,
      color: `black`,
      textDecoration: `none`,
      fontFamily:`Roboto sans-serif`,
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
      position: `fixed`,
      width:`100vw`,
    }}
  >
    <div
      style={{
        width: `75vw`,
        textAlign: `right`,
        margin:`0 auto`,
      }}
    >
      <SectionLink sectionTitle="about"></SectionLink>
      <SectionLink sectionTitle="projects"></SectionLink>
      <SectionLink sectionTitle="resume"></SectionLink>
    </div>
  </header>
)

export default IndexHeader
