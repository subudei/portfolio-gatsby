import React from "react"
import "./nav.styles.css"

import { Link } from "gatsby"

function Nav() {
  return (
    <div className="nav__container">
      <div className="nav__logo">
        <Link to="/" className="logo__link">
          <h1 className="logo__text">MILAN</h1>
          <h1 className="logo__text">CIRKOVIC</h1>
        </Link>
      </div>
      <div className="menu__links">
        <Link className="menu__link" to="/projects/">
          projects
        </Link>
        <Link className="menu__link" to="/about/">
          about
        </Link>
        <Link className="menu__link" to="/contact/">
          contact
        </Link>
      </div>
    </div>
  )
}

export default Nav
