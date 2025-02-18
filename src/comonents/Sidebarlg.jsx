import React, { useContext } from "react";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Context } from "../context/context";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
const Sidebarlg = () => {
  const {open, toggleSidebar,} = useContext(Context)
  const sref = useRef();
  useGSAP(() => {
    gsap.from(sref.current, {
      x: -100, // Slide in from the bottom
      opacity: 0, // Start with 0 opacity to fade in
      duration: 1, // Adjust duration as needed
      delay: 2,
      ease: "power3.out" // Use a smoother easing function
    });
  });
  return (
    <div
    ref={sref}
      className={`fixed lg:block top-0 hidden pb-9 flex-col border-r-1 border-[#b771dd] items-center justify-center lg:h-[100vh] w-14 bg-blur bg-[#090412] rounded-r-xl z-10`}
    >
      <div className="flex flex-col items-center justify-between  mx-auto h-full bg-blur">
        <div className="flex flex-col items-center justify-center cursor-pointer" onClick={toggleSidebar}>
          <h3 className="pt-20 font-mini text-gray-300">
            <FaClockRotateLeft />
          </h3>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 w-full">
          <a target="#" href="https://github.com/dhiraj-001/">
            <span className="w-7 h-7 opacity-60 bannerIcon shadow-s1 text-gradient">
              <FaGithub />
            </span>
          </a>
          <a target="#" href="https://www.instagram.com/dhi_raj__001/">
            <span className="w-7 h-7 bannerIcon opacity-65 shadow-s1 text-gradient">
              <FaInstagram />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/dhiraj-gogoi-330008274/"
            target="#"
          >
            <span className="w-7 h-7 bannerIcon opacity-65 shadow-s1 text-gradient">
              <FaLinkedinIn />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebarlg;
