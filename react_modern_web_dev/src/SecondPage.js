import React, { useEffect } from 'react';
import gsap from 'gsap';
import "./App.css";

function SecondPage() {
  useEffect(() => {
    animateImages();
  }, []);

  const animateImages = () => {
    document.querySelectorAll('.elem').forEach(function (elem) {
      let rotate = 0;
      let diffRot = 0;
  
      elem.addEventListener('mouseleave', function () {
        gsap.to(elem.querySelector('img'), {
          opacity: 0,
          ease: 'power3.inOut',
        });
      });
  
      elem.addEventListener('mousemove', function (dets) {
        const diffTop = dets.clientY - elem.getBoundingClientRect().top;
        const diffLeft = dets.clientX - elem.getBoundingClientRect().left;
        diffRot = dets.clientX - rotate;
        rotate = dets.clientX;
  
        gsap.to(elem.querySelector('img'), {
          opacity: 1,
          ease: 'power3.inOut',
          top: diffTop - elem.querySelector('img').height / 2,
          left: diffLeft - elem.querySelector('img').width / 2,
          rotate: gsap.utils.clamp(-20, 20, diffRot * 0.5),
          scale: 1.1, // Add scale for a smoother zoom effect
          duration: 0.5, // Adjust the duration for a smoother animation
        });
  
        gsap.set(elem.querySelector('img'), {
          bottom: 'auto',
          right: 'auto',
        });
      });
    });
  };
  return (
    <div id="sec-content">
      <div className="elem">
        <img src="plug.png" alt="the plug" />
        <h1>the plug</h1>
        <h6>2022</h6>
      </div>
      <div className="elem">
        <img src="ixperience.png" alt="ixperience" />
        <h1>ixperience</h1>
        <h6>2022</h6>
      </div>
      <div className="elem elemLast">
        <img src="hudu.png" alt="hudu" />
        <h1>hudu</h1>
        <h6>2022</h6>
      </div>
    </div>
  );
}

export default SecondPage;
