import React, { useContext } from "react";
import { BsGem } from "react-icons/bs";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { LuHistory } from "react-icons/lu";
import { RiSettings4Fill } from "react-icons/ri";
import { BsDot } from "react-icons/bs";
import searchData from "../data/history";
import { MdOutlineAlignHorizontalLeft } from "react-icons/md";
import MyDetail from "./MyDetail";
import Sidebarlg from "./Sidebarlg";
import { Context } from "../context/context";
const opts = [
  { icon: <BsGem />, title: "Gem Manager" },
  { icon: <IoMdHelpCircleOutline />, title: "Help" },
  { icon: <LuHistory />, title: "History" },
  { icon: <RiSettings4Fill />, title: "Settings" },
];

const Sidebar = () => {
   const {open, toggleSidebar, prevs, onSent} = useContext(Context)
   const sreach = async(prompt) =>{
      await onSent(prompt);
      toggleSidebar()
   }
  return (
    <div>
     
       <div
      className={`fixed top-0 pb-3 h-[93vh] lg:h-[100vh] w-[85vw] xl:w-[40vw] bg-blur bg-[#030408] rounded-r-xl transition-transform transform ${
        open ? "translate-x-0" : "-translate-x-full"
      } z-10`}
    >
      <div className="flex flex-col justify-between h-full bg-blur">
        <div>
              <h3 className="pt-20 pl-2 font-mini text-gray-300">Recent</h3>
        <div className="flex flex-col gap-3 mt-6 ml-4">
          {" "}
          {prevs.map((item,i) => (
            <div
            onClick={()=>sreach(item.title)}
            key={i} className="search-item flex transition duration-300 gap-3 items-center hover:bg-[#8a8a8a49] py-3 pl-4 rounded-4xl mr-2 cursor-pointer">
              <MdOutlineAlignHorizontalLeft className="fill-[#c0bbbbe7]"/>
              <h2 className="title font-title tracking-wider text-sm text-[#dcdcdce7] " >{item.title}</h2>
            </div>
          ))}
          {/* <div className="cursor-pointer hover:bg-[#8a8a8a49] transition duration-300 py-3 pl-3 rounded-4xl mr-2 font-title tracking-wider text-sm text-[#c0bbbbe7]">
            More . . .
          </div> */}
        </div>
        </div>
    
        <div>
          <div className="mt-5 ml-2">
            {opts.map((opt, index) => (
              <div
                key={index}
                className="flex items-center gap-2.5 p-2.5 text-gray-300"
              
            
              >
                {opt.icon}
                <span className="font-mini">{opt.title}</span>
              </div>
            ))}
          </div>
          {/* <button className="flex gap-4 px-6 py-1.5 rounded-lg items-center ml-5 mt-3 bg-gray-600">
            <img src={logo} alt="" className="h-11 w-11" />
            <span className="font-sans">Try Geminii Advance</span>
          </button> */}
          <MyDetail/>
          <div className="mt-5 flex items-start">
            <BsDot className="text-4xl fill-[#888]" />
            <div className="flex flex-col">
              <div className="flex items-center">
                <span className="font-mini text-[13px] text-gray-300">
                  Guwahati Assam, India
                </span>
              </div>
              <div className=" flex">
                <span className="font-mini text-sm text-blue-400">
                  From your ip address{" "}
                </span>
                <BsDot />
                <span className="font-mini text-sm text-blue-400">
                  {" "}
                  Update location
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default Sidebar;
