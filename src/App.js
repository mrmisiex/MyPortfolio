import "./App.scss";
import React, { useRef, useEffect, useState } from "react";
// import { useWindowScroll } from "react-use";
import { ReactComponent as Slide } from "./First.svg";
import { ReactComponent as Slide1400 } from "./First1400x800.svg";
import { ReactComponent as Slide1024 } from "./First1024x600.svg";
import { ReactComponent as Slide768 } from "./First768x600.svg";
import { ReactComponent as Slide430 } from "./First430x630.svg";
import { ReactComponent as Slide375 } from "./First375x500.svg";
import { gsap } from "gsap";
import Sections from "./Components/Sections";

//gsap.registerPlugin(DrawSVGPlugin);

function App() {
  const wrapper = useRef(null);
  const refToTop = useRef(null);
  const [isAnimationActive, setisAnimationActive] = useState(false);
  const [isAnimationOn, setisAnimationOn] = useState(true);

  // const { y: pageYOffset } = useWindowScroll();
  useEffect(() => {
    const [elements] = wrapper.current.children;
    const WelcomePage = elements.getElementById("WelcomePage");
    const AboutMePage = elements.getElementById("AboutMePage");
    const Page = elements.getElementById("Page");
    gsap.set(WelcomePage, { autoAlpha: 0 });
    gsap.set(Page, { transformOrigin: "50% 50%" });
    gsap.set(AboutMePage, { y: -700 });

    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
    //const repeat = gsap.timeline({ repeat: 5 });
    tl.fromTo(
      WelcomePage,
      { y: -500, scale: 1, transformOrigin: "50% 50%" },
      { y: 0, duration: 3, autoAlpha: 1, ease: "bounce.out" }
    );
    const NextAnimation = () => {
      setisAnimationActive(true);
      console.log(isAnimationActive);
    };
    const SkipAnimation = () => {
      setisAnimationOn(!isAnimationOn);
    };

    const AboutMeTexts = elements.getElementById("AboutMeTexts");
    const OldPageWider = elements.getElementById("OldPageWider");
    const AboutMeLinks = elements.getElementById("AboutMeLinks");
    const AboutPage = elements.getElementById("AboutPage");
    const HomePage = elements.getElementById("HomePage");
    const ProjectsPage = elements.getElementById("ProjectsPage");
    const SkillsPage = elements.getElementById("SkillsPage");
    const ContactPage = elements.getElementById("ContactPage");
    const Skip = elements.getElementById("SkipAnimation");

    AboutPage.addEventListener("click", () => {
      window.scrollTo({
        top: document.querySelector(".about").offsetTop,
        behavior: "smooth",
      });
      setisAnimationOn(!isAnimationOn);
    });

    ProjectsPage.addEventListener("click", () => {
      window.scrollTo({
        top: document.querySelector(".projects").offsetTop,
        behavior: "smooth",
      });
      setisAnimationOn(!isAnimationOn);
    });

    HomePage.addEventListener("click", () => {
      window.scrollTo({
        top: document.querySelector(".home").offsetTop,
        behavior: "smooth",
      });
      setisAnimationOn(!isAnimationOn);
    });

    SkillsPage.addEventListener("click", () => {
      window.scrollTo({
        top: document.querySelector(".skills").offsetTop,
        behavior: "smooth",
      });
      setisAnimationOn(!isAnimationOn);
    });

    ContactPage.addEventListener("click", () => {
      window.scrollTo({
        top: document.querySelector(".contact").offsetTop,
        behavior: "smooth",
      });
      setisAnimationOn(!isAnimationOn);
    });

    document.getElementById("Page").addEventListener("click", NextAnimation);
    Skip.addEventListener("click", SkipAnimation);

    gsap.set([...AboutMeTexts.children, ...AboutMeLinks.children], {
      autoAlpha: 0,
    });
    gsap.set(OldPageWider, { autoAlpha: 1 });

    const tl2 = gsap.timeline({ defaults: { ease: "power3.inOut" } });

    if (isAnimationActive === true) {
      tl2
        .to(WelcomePage, {
          y: 900,
          duration: 2.5,
          ease: "power3.in",
          scale: 0.3,
        })
        .to(AboutMePage, {
          y: 0,
          duration: 4,
          ease: "bounce.out",
          delay: -2,
        })
        .to(AboutMeTexts.children, {
          duration: 3,
          autoAlpha: 1,
          stagger: 1.4,
          delay: -3,
        })
        .to(AboutMeLinks.children, { duration: 3, autoAlpha: 1, stagger: 0.4 });
    } else {
    }
  }, [isAnimationActive, isAnimationOn]);

  return (
    <div ref={refToTop} className="App">
      {isAnimationOn ? (
        <div className="welcomeAnimation" ref={wrapper}>
          {window.innerWidth < 375 ? (
            <Slide375 />
          ) : window.innerWidth < 430 ? (
            <Slide430 />
          ) : window.innerWidth < 768 ? (
            <Slide768 />
          ) : window.innerWidth < 1024 ? (
            <Slide1024 />
          ) : window.innerWidth < 1400 ? (
            <Slide1400 />
          ) : (
            <Slide />
          )}
          {/* <Slide /> */}
        </div>
      ) : null}
      <Sections />
    </div>
  );
}

export default App;
