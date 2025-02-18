import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

function MyDetail() {
  return (
    <div className=" mx-3 px-2 pt-5 ">
      <div>
        <h3 className="font-mini text-purple-300 text-sm">
          &#169;Developed by Dhiraj
        </h3>
      </div>
      <div className="flex gap-4 ml-4 my-3">
        <a target="#" href="https://github.com/dhiraj-001/">
          <span className="bannerIcon w-10 h-10 shadow-s1 text-gradient">
            <FaGithub />
          </span>
        </a>
        <a target="#" href="https://www.instagram.com/dhi_raj__001/">
          <span className="bannerIcon w-10 h-10 shadow-s1 text-gradient">
            <FaInstagram />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/dhiraj-gogoi-330008274/"
          target="#"
        >
          <span className="bannerIcon w-10 h-10 shadow-s1 text-gradient">
            <FaLinkedinIn />
          </span>
        </a>
      </div>
    </div>
  );
}

export default MyDetail;
