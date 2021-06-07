import React, { useEffect } from "react"
import "./projects.styles.css"

import { StaticImage } from "gatsby-plugin-image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

function Projects() {
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const tlp1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".project__1__img",
        markers: true,
        start: "top 65%",
        end: "top top",
      },
    })
    tlp1.from(".project__1__img", {
      x: -2000,
      duration: 0.5,
    })
    tlp1.from(
      ".project__description__1",
      {
        x: 2000,
        duration: 0.3,
      },
      "-=0.2"
    )

    const tlp2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".project__2__img",
        markers: true,
        start: "top 65%",
        end: "top top",
      },
    })
    tlp2.from(".project__2__img", {
      x: -2000,
      duration: 0.5,
    })
    tlp2.from(
      ".project__description__2",
      {
        x: 2000,
        duration: 0.3,
      },
      "-=0.2"
    )

    const tlp3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".project__3__img",
        markers: true,
        start: "top 65%",
        end: "top top",
      },
    })
    tlp3.from(".project__3__img", {
      x: -2000,
      duration: 0.5,
    })
    tlp3.from(
      ".project__description__3",
      {
        x: 2000,
        duration: 0.3,
      },
      "-=0.2"
    )

    const tlp4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".project__4__img",
        markers: true,
        start: "top 65%",
        end: "top top",
      },
    })
    tlp4.from(".project__4__img", {
      x: -2000,
      duration: 0.5,
    })
    tlp4.from(
      ".project__description__4",
      {
        x: 2000,
        duration: 0.3,
      },
      "-=0.2"
    )
  }, [])

  return (
    <div className="projects__container">
      <div className="projects__header">
        <h1 className="ph__title">Some Things I’ve Built</h1>
      </div>
      <div className="project__container">
        <div className="project__1__img">
          <StaticImage
            src="../images/wapp.png"
            // width={300}
            quality={100}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Weather__App"
            className="pr__image"
            // style={{ marginBottom: `1.45rem` }}
          />
        </div>
        <div className="project__description__1">
          <h2>project name</h2>
        </div>
      </div>
      <div className="project__container">
        <div className="project__2__img">
          <StaticImage
            src="../images/todo__app.png"
            // width={300}
            quality={100}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Todo__App"
            className="pr__image"
            // style={{ marginBottom: `1.45rem` }}
          />
        </div>
        <div className="project__description__2">
          <h2>project name</h2>
        </div>
      </div>
      <div className="project__container">
        <div className="project__3__img">
          <StaticImage
            src="../images/ecommerce.png"
            // width={300}
            quality={100}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Ecommerce__App"
            className="pr__image"
            // style={{ marginBottom: `1.45rem` }}
          />
        </div>
        <div className="project__description__3">
          <h2>project name</h2>
        </div>
      </div>
      <div className="project__container">
        <div className="project__4__img">
          <StaticImage
            src="../images/massage_page.png"
            // width={300}
            quality={100}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="WWeb_page"
            className="pr__image"
            // style={{ marginBottom: `1.45rem` }}
          />
        </div>
        <div className="project__description__4">
          <h2>project name</h2>
        </div>
      </div>
    </div>
  )
}

export default Projects
