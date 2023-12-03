const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function circleSkew() {
  var xScale = 1;
  var yScale = 1;

  var xPrev = 0;
  var yPrev = 0;

  var timeout;

  window.addEventListener("mousemove", function (dets) {
    clearTimeout(timeout);

    var xDiff = dets.clientX - xPrev;
    var yDiff = dets.clientY - yPrev;

    xPrev = dets.clientX;
    yPrev = dets.clientY;

    gsap.utils.clamp(0.8, 1.2, xDiff);
    gsap.utils.clamp(0.8, 1.2, yDiff);

    circleMouseFollower(xScale, yScale);

    timeout = setTimeout(function () {
      document.querySelector(
        "#minicircle"
      ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;
    }, 100);
  });
}
circleSkew();

function circleMouseFollower(xScale, yScale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xScale} , ${yScale})`;
  });
}
circleMouseFollower();

function firstPageAnim() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })
    .to(".boundingelem", {
      y: 0,
      duration: 2,
      ease: Expo.easeInOut,
      stagger: 0.2,
      delay: -1,
    })
    .from("#heroFooter", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: Expo.easeInOut,
    });
}
firstPageAnim();

document.querySelectorAll(".elem").forEach(function(elem) {
  var rotate = 0;
  var diffRot = 0;

  elem.addEventListener("mouseleave", function () {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    var diffTop = dets.clientY - elem.getBoundingClientRect().top;
    var diffLeft = dets.clientX - elem.getBoundingClientRect().left;
    diffRot = dets.clientX - rotate;
    rotate = dets.clientX;

    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diffTop - elem.querySelector("img").height / 2,
      left: diffLeft - elem.querySelector("img").width / 2,
      rotate: gsap.utils.clamp(-20, 20, diffRot * 0.5),
    });
  });
});
