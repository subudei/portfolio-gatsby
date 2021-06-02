import * as React from "react"
import "./header.styles.css"

import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <div className="header__container">
    <div className="header__title__div">
      <Link to="/" className="header__link">
        <h1 className="header__title__h1">
          milan <br />
          cirkovic
        </h1>
      </Link>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
