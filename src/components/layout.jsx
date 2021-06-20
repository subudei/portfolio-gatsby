import React from "react"
import PropTypes from "prop-types"

import "./layout.styles.css"
import Nav from "./navbar/nav"

const Layout = ({ children }) => {
  return (
    <div className="layout__container">
      <Nav />
      <main>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
