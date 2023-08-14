import "./intro.scss";
import Typewriter from "typewriter-effect/dist/core";
import { useRef, useEffect } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    new Typewriter(textRef.current, {
      strings: ["Developer", "Student", "Designer"],
      autoStart: true,
      loop: true,
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>User name</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
