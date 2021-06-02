import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// import Header from "./header/header"
import "./layout.styles.css"
import Nav from "./navbar/nav"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="layout__container">
      <Nav />
      <main>{children}</main>
    </div>
    // <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
