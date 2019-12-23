import React from "react"

const SectionLink = ({ sectionTitle }) => (
  <span
    style={{
      margin: `1em 1.5em`,
      display: `inline-block`,
      padding: `0 .25em`,
      color: `gray`,
      textDecoration: `none`,
      fontFamily: `Roboto sans-serif`,
      fontSize: `1.25em`,
      borderRadius: `16px`,
      background: `#ccffee`,
    }}
  >
    <a onClick={() => document.getElementById(sectionTitle).scrollIntoView()}>
      {sectionTitle}
    </a>
  </span>
)

const PageHeader = props => {
  const links = props.sections.map(section => (
    <SectionLink sectionTitle={section}></SectionLink>
  ))
  return (
    <header
      style={{
        position: `fixed`,
        zIndex: `100`,
        width: `100vw`,
        textAlign: `right`,
      }}
    >
      <div>{links}</div>
    </header>
  )
}

export default PageHeader
