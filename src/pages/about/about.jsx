import * as React from "react"
import "./about.styles.css"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

function About() {
  return (
    <Layout>
      <Seo title="about" />
      <div className="about__container">about page</div>
    </Layout>
  )
}

export default About
