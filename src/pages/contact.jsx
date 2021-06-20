import React, { useEffect } from "react"
import "./contact.styles.css"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { FiLinkedin } from "@react-icons/all-files/fi/FiLinkedin"
import { FiGithub } from "@react-icons/all-files/fi/FiGithub"
import { FiPhoneIncoming } from "@react-icons/all-files/fi/FiPhoneIncoming"

function Contact() {
  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
    const tlContact = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact__message__span",
        // markers: true,
        start: "top 65%",
        end: "top top",
      },
    })
    tlContact.to(".contact__message__span", {
      letterSpacing: "1.3rem",
      duration: 1.5,
      // repeatDelay: 3,
      // repeat: -1,
      // ease: "power4.easeIn",
    })
    tlContact.from(".contact__icon__g", {
      opacity: 0,
      duration: 0.3,
    })
    tlContact.from(".contact__icon__l", {
      opacity: 0,
      duration: 0.3,
    })
    tlContact.from(".contact__mobile", {
      opacity: 0,
      duration: 0.3,
    })
    tlContact.from(".contact__mail__address", {
      opacity: 0,
      duration: 0.3,
    })
  }, [])
  return (
    <div className="contact__container">
      <div className="contact__message__wrapper">
        <h1 className="contact__message">
          For any proposal of collaboration, feel free to <br />
          <span className="contact__message__span"> contact me.</span>
        </h1>
      </div>
      <div className="contact__links__wrapper">
        <div className="contact__icons">
          <a href="https://github.com/subudei" target="_blank" rel="noreferrer">
            <FiGithub className="contact__icon__g" />
          </a>
          <a
            href="https://www.linkedin.com/in/milan-cirkovic-3711331b3/"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin className="contact__icon__l" />
          </a>
        </div>
        <div className="contact__icons pm">
          <div className="contact__mobile">
            <FiPhoneIncoming className="contact__icon__p" />
            +38163363796
          </div>
          <div className="contact__mail">
            <a
              className="contact__mail__address"
              href="mailto:milan_cirkovic@yahoo.com"
              target="_blank"
            >
              milan_cirkovic@yahoo.com
            </a>
          </div>
        </div>
      </div>
      <div className="contact__footer">
        Designed and Built by Milan Cirkovic
      </div>
    </div>
  )
}

export default Contact
