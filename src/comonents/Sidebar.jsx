import React from "react";
import { BsGem } from "react-icons/bs";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { LuHistory } from "react-icons/lu";
import { RiSettings4Fill } from "react-icons/ri";
import { RiGeminiFill } from "react-icons/ri";
import { BsDot } from "react-icons/bs";
const opts = [
  { icon: <BsGem />, title: "Gem Manager" },
  { icon: <IoMdHelpCircleOutline />, title: "Help" },
  { icon: <LuHistory />, title: "History" },
  { icon: <RiSettings4Fill />, title: "Settings" },
];

const Sidebar = ({ open }) => {
  return (
    <div
      className={`sidebar pb-5 z-10 h-[100vh] w-[83vw] bg-[#282a2c] rounded-r-xl mt-[-79px] ${
        open ? "open" : "closed"
      }`}
    >
      <div className="flex flex-col justify-between h-full">
        <h3 className="pt-20 pl-2 font-mini text-gray-300">Recent</h3>
        <div>
          {" "}
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
          <button className="flex gap-4 px-6 py-1.5 rounded-lg items-center ml-5 mt-3 bg-gray-600">
            <RiGeminiFill className="text-xl" />
            <span className="font-sans">Try Gemini Advance</span>
          </button>
          <div className="mt-5 flex items-start">
            <BsDot className="text-4xl text-gray-500!" />
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
  );
};

export default Sidebar;
