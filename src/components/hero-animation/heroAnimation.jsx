import React, { useEffect } from "react"
import "./heroAnimation.styles.css"

import { gsap } from "gsap"

function HeroAnimation() {
  const tl = gsap.timeline({ delay: 1, repeat: 3, repeatDelay: 10 })
  useEffect(() => {
    tl.to(".i__drop", { duration: 0.5, bottom: "29rem", ease: "bounce.out" })
    tl.to(".i__drop", {
      duration: 0.2,
      bottom: "37rem",
      ease: "back.out(4)",
      backgroundColor: "#ffffff",
    })
    tl.from(
      ".i__letter",
      {
        duration: 0.4,
        bottom: "-10rem",
        ease: "elastic.out(1, 0.1)",
      },
      "-=0.2"
    )
    tl.to(
      ".h__drop",
      { duration: 0.5, ease: "elastic.out(1,0.3)", bottom: 0 },
      "-=0.5"
    )
    tl.to(".h__letter", { opacity: 1 }, "-=0.4")
    tl.to(".h__drop", { width: "0rem", duration: 0.1 })
    tl.to(".h__paravan", { width: "5.5rem" }, "-=0.5")
    tl.to(".i__dev", { opacity: 1, duration: 0.01 }, "+=1.7")
    tl.to(".h__letter", { left: "-10rem", duration: 0.5 }, "+=0.7")
    tl.to(".i__letter", { bottom: "-15rem" })

    tl.to(
      ".i__drop",
      { bottom: "29rem", duration: 0.5, ease: "bounce.out" },
      "-=0.2"
    )
    tl.to(".i__drop", { left: "34.75rem", duration: 0.1 })
    tl.from(".m__dev", { left: "-15rem" }, "-=0.3")
    tl.to(".h__paravan", { width: 0 })
    tl.to(".coma__letter", { opacity: 1 }, "-=3.5")
    tl.to(".coma__letter", { opacity: 0 }, "-=1.5")
    tl.to(
      ".a__dev",
      { opacity: 1, duration: 0.3, rotate: 360, ease: "elastic.out(2,0.2)" },
      "-=0.5"
    )
    tl.from(".web__dev", { left: "80rem", duration: 0.5 }, "-=0.5")
    tl.to(".web__dev", { fontStyle: "normal" }, "+=0.5")
    tl.to(
      ".e__dev",
      {
        opacity: 1,
        duration: 0.3,
        rotate: 360,
        ease: "elastic.out(2,0.2)",
      },
      "-=0.5"
    )
    tl.from(".dev__dev", { duration: 1, left: "-20rem" }, "-=1")
    tl.to(
      ".l__drop",
      {
        top: "25rem",
        duration: 0.2,
      },
      "-=1"
    )
    tl.to(
      ".l__drop",
      {
        top: "31rem",
        height: "10rem",
        duration: 0.1,
      },
      "-=0.8"
    )
    tl.to(
      ".l__dev",
      {
        opacity: 1,
        duration: 0.1,
      },
      "-=0.6"
    )
    tl.to(".l__drop", { opacity: 0 }, "-=0.6")
    tl.to(
      ".i__drop",
      { bottom: "21rem", duration: 0.2, ease: "bounce.out" },
      "-=1.2"
    )
    tl.to(".i__drop", { scale: 2.9, duration: 0.5 }, "-=1")
    tl.to(".o__dev", { opacity: 1, duration: 0.2 }, "-=0.7")
    tl.to(".i__drop", { opacity: 0 }, "-=0.3")
    tl.to(".o__dev", { color: "#ff3e55" })
    tl.from(
      ".p__dev",
      {
        bottom: "-10rem",
      },
      "-=2"
    )
    tl.to(".ee__dev", { opacity: 1, duration: 0.1 }, "-=0.5")
    tl.to(
      ".ee__dev",
      { duration: 0.5, left: "45.5rem", ease: "back.out(4)" },
      "-=0.3"
    )
    tl.from(".r__dev", { top: "-15rem", ease: "elastic.out(1, 0.5)" }, "-=0.2")
    tl.to(".dot__dev", { opacity: 1 })
  }, [])

  return (
    <div className="web__dev__animation__container">
      <div className="i__drop" />
      <div className="l__drop" />
      <div className="r__dev">r</div>
      <div className="hello__div">
        <div className="h__letter">H</div>
        <div className="i__letter">I</div>
        <div className="coma__letter">,</div>
        <div className="h__drop" />
        <div className="h__paravan" />
        <div className="i__dev">I</div>
        <div className="m__dev">'m</div>
        <div className="a__dev">a</div>
        <div className="web__dev">web</div>
        <div className="web__paravan" />
      </div>
      <div className="developer__div">
        <div className="dev__dev">dev</div>
        <div className="e__dev">e</div>
        <div className="l__dev">l</div>
        <div className="o__dev">o</div>
        <div className="p__dev">p</div>
        <div className="ee__dev">e</div>
        <div className="dot__dev">.</div>
      </div>
    </div>
  )
}

export default HeroAnimation
