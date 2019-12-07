import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const SectionLink = ( {sectionTitle} ) => (
  <h3
    style={{
      margin: 0,
      display: `inline-block`,
      padding: `0.15em 2em`
   }}>
    <Link
      to="/"
      state={{section: sectionTitle}}
      style={{
        color: `white`,
        textDecoration: `none`,
      }}
    >{sectionTitle}</Link>
  </h3>
)

const Header = () => (
  <header
    style={{
      background: `linear-gradient(rgba(255,102,102,1),rgba(255,153,153,1))`,
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

export default Header
