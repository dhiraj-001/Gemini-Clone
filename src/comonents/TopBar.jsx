import React, { useState } from "react";
import { MdOutlineHistory } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import img1 from "../imgs/profle.jpg";
import { FaBars } from "react-icons/fa6";
import Sidebar from "./Sidebar";
import logo from "../imgs/logo.png";
function TopBar() {
  const [open, setOpen] = useState(false);
  function handleOpen() {
    setOpen(!open);
  }
  return (
    <div className="relative backdrop-blur-md z-20">
         <Sidebar open={open} />
      <div className="flex justify-between mx-3 z-20">
        <div className="flex gap-2.5 items-center m-3 z-20">
          <button
            onClick={handleOpen}
            className="cursor-pointer ease-out ml-[-15px] transition duration-300 hover:bg-[#6a6a6a81] w-10 h-10 rounded-full flex justify-center items-center"
          >
            <FaBars className="fill-gray-300" />
          </button>

          <div className="flex gap-2.5 items-start">
          <img src={logo} alt="" className="h-13 w-11 ml-[-12px]"/>
            <div className="gemini">
             
              <h2 className="text-2xl font-body ">Geminii</h2>
              <h4 className="text-gray-400! font-mini">2.0 Flash</h4>
            </div>
            <div>
              <IoMdArrowDropdown className="text-gray-400! text-xl mt-1.5" />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-8 z-20">
          <div className="history">
            <MdOutlineHistory className="text-3xl" />
          </div>
          <div className="profile rounded-full overflow-hidden h-10 w-10">
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default TopBar;
