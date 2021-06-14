import * as React from "react"
import "./index.styles.css"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroAnimation from "../components/hero-animation/heroAnimation"
import About from "./about"
import Projects from "./projects"
import Contact from "./contact"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="app__container">
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

export default IndexPage
