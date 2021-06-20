import React, { useEffect } from "react"
import "./index.styles.css"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroAnimation from "../components/hero-animation/heroAnimation"
import About from "./about"
import Projects from "./projects"
import Contact from "./contact"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { FaAngleDoubleDown } from "@react-icons/all-files/fa/FaAngleDoubleDown"
import { CgMouse } from "@react-icons/all-files/cg/CgMouse"
import { BiEnvelope } from "@react-icons/all-files/bi/BiEnvelope"

const IndexPage = () => {
  gsap.registerPlugin(ScrollTrigger)

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
        end: "top 90vh",
        // markers: true,
      },
      top: "90vh",
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    })
  }, [])
  return (
    <Layout>
      <Seo title="Home" />
      <div className="app__container">
        <div className="scroll__icon">
          <CgMouse className="scroll__mouse" />
          <FaAngleDoubleDown className="scroll__arrows" />
        </div>
        <div className="contact__icon">
          <a
            className="contact__mail"
            href="mailto:milan_cirkovic@yahoo.com"
            target="_blank"
          >
            <BiEnvelope className="mail__icon" />
          </a>
        </div>
        <div className="home__container">
          <div className="home__animation">
            <HeroAnimation />
          </div>
        </div>
        <Projects />
        <About />
        <Contact />
      </div>
    </Layout>
  )
}
export default IndexPage
