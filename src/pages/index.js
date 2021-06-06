import * as React from "react"
import "./index.styles.css"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

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
  // <StaticImage
  //   src="../assets/programmer.inline.svg"
  //   width={300}
  //   // quality={100}
  //   // formats={["AUTO", "WEBP", "AVIF"]}
  //   alt="Programmer"
  //   // style={{ marginBottom: `1.45rem` }}
  // />
  // <p>
  //   <Link to="/page-2/">Go to page 2</Link> <br />
  //   <Link to="/about/about/">About</Link>
  // </p>
)

export default IndexPage
