import React, { useEffect } from "react"
import "./projects.styles.css"

import { StaticImage } from "gatsby-plugin-image"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaGlobe } from "@react-icons/all-files/fa/FaGlobe"

function Projects() {
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const tlp1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".project__1__img",
        // markers: true,
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
        // markers: true,
        start: "top 75%",
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
          <a
            href="https://subudei.github.io/weather-app/"
            target="_blank"
            rel="noreferrer"
          >
            <StaticImage
              src="../images/wapp.png"
              quality={100}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Weather__App"
              className="pr__image"
            />
          </a>
        </div>
        <div className="project__description__1">
          <h2 className="pd__title">Weather App</h2>
          <p className="pd__description">
            A web app for current weather conditions and three day forecast.
          </p>
          <div className="pd__icons">
            <a
              href="https://github.com/subudei/weather-app"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="pd__icon" />
            </a>
            <a
              href="https://subudei.github.io/weather-app/"
              target="_blank"
              rel="noreferrer"
            >
              <FaGlobe className="pd__icon" />
            </a>
          </div>
          <div className="pd__techniques">
            <h4 className="pd__techniqe">React.JS</h4>
            <h4 className="pd__techniqe">API</h4>
            <h4 className="pd__techniqe">SASS</h4>
          </div>
        </div>
      </div>
      <div className="project__container">
        <div className="project__2__img">
          <a
            href="https://react-todo-app-723ec.firebaseapp.com/login"
            target="_blank"
            rel="noreferrer"
          >
            <StaticImage
              src="../images/todo__app.png"
              quality={100}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Todo__App"
              className="pr__image"
            />
          </a>
        </div>
        <div className="project__description__2">
          <h2 className="pd__title">Todo App</h2>
          <p className="pd__description">
            A simple and awesome app to organize your tasks with very easy to
            use interface.
          </p>
          <div className="pd__icons">
            <a
              href="https://github.com/subudei/todo-app-firebase-db"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="pd__icon" />
            </a>
            <a
              href="https://react-todo-app-723ec.firebaseapp.com/login"
              target="_blank"
              rel="noreferrer"
            >
              <FaGlobe className="pd__icon" />
            </a>
          </div>
          <div className="pd__techniques">
            <h4 className="pd__techniqe">React.JS</h4>
            <h4 className="pd__techniqe">Context API</h4>
            <h4 className="pd__techniqe">Firebase</h4>
            <h4 className="pd__techniqe">CSS</h4>
          </div>
        </div>
      </div>
      <div className="project__container">
        <div className="project__3__img">
          <a
            href="https://ecommerce-2021-b67ff.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            <StaticImage
              src="../images/ecommerce.png"
              quality={100}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Ecommerce__App"
              className="pr__image"
            />
          </a>
        </div>
        <div className="project__description__3">
          <h2 className="pd__title">E-commerce website</h2>
          <p className="pd__description">
            Online shop which allows consumers to directly buy sport gear from a
            seller over the Internet using a web browser
          </p>
          <div className="pd__icons">
            <a
              href="https://github.com/subudei/react-ecommerce-03-2021"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="pd__icon" />
            </a>
            <a
              href="https://ecommerce-2021-b67ff.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              <FaGlobe className="pd__icon" />
            </a>
          </div>
          <div className="pd__techniques">
            <h4 className="pd__techniqe">React.JS</h4>
            <h4 className="pd__techniqe">Redux</h4>
            <h4 className="pd__techniqe">Firebase</h4>
            <h4 className="pd__techniqe">SASS</h4>
            <h4 className="pd__techniqe">Stripe</h4>
          </div>
        </div>
      </div>
      <div className="project__container">
        <div className="project__4__img">
          <a
            href="https://xenodochial-williams-6de26a.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <StaticImage
              src="../images/massage_page.png"
              quality={100}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="WWeb_page"
              className="pr__image"
            />
          </a>
        </div>
        <div className="project__description__4">
          <h2 className="pd__title">Massage Room</h2>
          <p className="pd__description">
            Web page for local massage studio to advertise their massage therapy
            services.
          </p>
          <div className="pd__icons">
            <a
              href="https://github.com/subudei/massage-page"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="pd__icon" />
            </a>
            <a
              href="https://xenodochial-williams-6de26a.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <FaGlobe className="pd__icon" />
            </a>
          </div>
          <div className="pd__techniques">
            <h4 className="pd__techniqe">React.JS</h4>
            <h4 className="pd__techniqe">Gatsby</h4>
            <h4 className="pd__techniqe">SASS</h4>
            <h4 className="pd__techniqe">GSAP</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
