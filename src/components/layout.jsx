import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// import Header from "./header/header"
import "./layout.styles.css"
import Nav from "./navbar/nav"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { BiEnvelope } from "@react-icons/all-files/bi/BiEnvelope"
import { FaAngleDoubleDown } from "@react-icons/all-files/fa/FaAngleDoubleDown"
import { CgMouse } from "@react-icons/all-files/cg/CgMouse"

const Layout = ({ children }) => {
  gsap.registerPlugin(ScrollTrigger)
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  useEffect(() => {
    gsap.to(".scroll__arrows", {
      duration: 0.7,
      ease: "power2.out",
      y: "2vh",
      repeat: -1,
      yoyo: true,
    })
    gsap.to(".contact__icon", {
      scrollTrigger: {
        trigger: ".contact__icon",
        start: "bottom top",
        toggleActions: "restart none none reset",
        end: "top 90%",
        // markers: true,
      },
      top: "90vh",
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    })
  }, [])

  return (
    <div className="layout__container">
      <Nav />
      <div className="contact__icon">
        <a
          className="contact__mail"
          href="mailto:milan_cirkovic@yahoo.com"
          target="_blank"
        >
          <BiEnvelope className="mail__icon" />
        </a>
      </div>
      <div className="scroll__icon">
        <CgMouse className="scroll__mouse" />
        <FaAngleDoubleDown className="scroll__arrows" />
      </div>

      <main>{children}</main>
    </div>
    // <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
