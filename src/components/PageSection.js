import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const PageSection = ({ children }) => {
  return (
    <div
      style={{
        flexBasis: `50%`,
        height: `100vh`,
        border: `1px solid gray`,
        scrollSnapAlign: `start`,
      }}
    >
      {children}
    </div>
  )
}


export default PageSection