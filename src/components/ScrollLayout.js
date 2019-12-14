/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import IndexHeader from "./IndexHeader"
import "./layout.css"
import scrollStyles from "./ScrollLayout.module.css"

const ScrollLayout = ({ children }) => {


  return (
      <div className = {scrollStyles.scroll_container}>
        <main>{children}</main>
        <footer>
        </footer>
      </div>
  )
}


export default ScrollLayout
