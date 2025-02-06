import React, { useState } from "react";
import { MdOutlineHistory } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import img1 from "../imgs/profle.jpg";
import { FaBars } from "react-icons/fa6";
import Sidebar from "./Sidebar";

function TopBar() {
const [open , setOpen] = useState(false)
function handleOpen(){
  setOpen(!open)
}
  return (
    <div>
      <div className="flex justify-between mx-3 z-20">
      <div className="flex gap-2.5 items-center m-3 z-20">
        <button onClick={handleOpen}>
           <FaBars className={`text-gray-400! mr-3 `} />
        </button>
        
        
        <div className="flex gap-2.5 items-start">
          <div className="gemini">
            <h2 className="text-2xl ">Gemini</h2>
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
    <Sidebar open={open}/>
    </div>
    
  );
}

export default TopBar;
