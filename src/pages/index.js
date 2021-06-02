import * as React from "react"
import './index.styles.css'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="home__container">
    home page
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
