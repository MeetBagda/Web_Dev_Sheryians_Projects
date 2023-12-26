import React, { useEffect } from "react";
import gsap from "gsap";
import "./App.css";
import Nav from "./Nav";


function Hero() {
  useEffect(() => {
    firstPageAnim();
  }, []);

  const firstPageAnim = () => {
    var tl = gsap.timeline();

    tl.from("#nav", {
      y: "-10",
      opacity: 0,
      duration: 1.5,
      ease: "expo.inOut",
    })
      .to(".boundingelem", {
        y: 0,
        duration: 2,
        ease: "expo.inOut",
        stagger: 0.2,
        delay: -1,
      })
      .from("#heroFooter", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: "expo.inOut",
      });
  };

  return (
    <div id="hero">
      <Nav />
      <div id="headings">
        <div className="bounding">
          <h1 className="boundingelem">product</h1>
        </div>
        <div id="blocktext">
          <div className="bounding">
            <h1 className="boundingelem" id="secondh1">
              designer
            </h1>
          </div>
          <div className="bounding">
            <h5 className="boundingelem">based in toronto</h5>
          </div>
        </div>
      </div>
      <div id="bannerheadings">
        <div className="bounding">
          <h5 className="boundingelem">available for freelance</h5>
        </div>
        <div className="bounding">
          <h5 className="boundingelem">work from may 23'</h5>
        </div>
      </div>
      <div id="heroFooter">
        <a href="#">
          currently working at yml <i className="ri-arrow-right-up-line"></i>
        </a>
        <a href="#">
          protopie ambassador <i className="ri-arrow-right-up-line"></i>
        </a>
        <div id="iconset">
          <div className="circle">
            <i className="ri-arrow-down-line"></i>
          </div>
          <div className="circle">
            <i className="ri-arrow-down-line"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
