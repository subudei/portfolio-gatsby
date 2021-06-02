import * as React from "react"
import "./header.styles.css"

import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = () => (
  <div className="header__container">
    <Link to="/" className="logo__link">
      <h1 className="logo__h1">MILAN</h1>
      <h1 className="logo__h1">CIRKOVIC</h1>
    </Link>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
