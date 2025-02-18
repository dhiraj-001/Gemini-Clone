import React, { useRef } from "react";
import logo from "../imgs/logo.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
function Welcome() {
  const sref = useRef();
  const textref = useRef();
  const wref = useRef();

  useGSAP(() => {
    gsap.from(sref.current, {
      x: -600,
      y: -200,
      scale: 0.6,
      rotate: 360,
      delay: 1,
      duration: 2,
    });
  });
  useGSAP(() => {
    gsap.from(textref.current, {
      x: 1100,
      y: -600,
      rotate: 360,
      delay: 1,
      duration: 2,
    });
  });
  useGSAP(() => {
    gsap.to(wref.current, {
      scale: 0,
      duration: 1.2, // Adjust duration as needed
      delay: 3,
      rotate: 360,
      x: 1000,
      y: 900,
    });
  });
  return (
    <div className="absolute h-screen w-screen bg-[#160f23] z-30" ref={wref}>
      <div>
        <img
          ref={sref}
          src={logo}
          alt="logo"
          className=" h-72 object top-64 left-96 absolute"
        />
      </div>
      <div
        ref={textref}
        className="text-9xl text-gradient  font-extrabold font-mini absolute top-[400px] left-[600px]"
      >
        Welcome
      </div>
    </div>
  );
}

export default Welcome;
