/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useState, useEffect} from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import layoutStyles from "./layout.module.css"

// Inline Fontawesome Styles to prevent flashing icons during first page load.
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)
 
  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <div className = {layoutStyles.content}>
        <main>{children}</main>
        {/* <footer className={layoutStyles.footer}>
          {`© ${new Date().getFullYear()}, Built with <3 by Kyle Zheng`}
        </footer> */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
