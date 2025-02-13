import React, { useContext, useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { FaMicrophone } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { Context } from "../context/context";
import { TiDeleteOutline } from "react-icons/ti";
function SearchBar() {
  const { input, setInput, onSent,hearMic } = useContext(Context);

  return (
    <div className="border-1 z-10 border-[#ffffff6d] h-13 w-[85vw] relative rounded-4xl flex flex-row align-middle items-center">
      <BiImageAdd className="w-10 h-8 ml-3 fill-gray-500" />
      <input 
        type="text" 
        className="ml-2 bg-transparent font-mini focus:outline-none focus:bg-transparent placeholder-gray-400 w-[85%]" 
        placeholder="Ask Geminii . . . " 
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {input && 
      <TiDeleteOutline className="absolute right-16 text-2xl fill-[#ffffffbd] cursor-pointer" onClick={()=>{
        setInput("");
       
      }}/>}
      {
        input ? (
          <button onClick={() => onSent()} className="absolute right-3 h-9 rounded-full flex ease-in-out items-center justify-center bg-[#8484844e] w-9 cursor-pointer transition duration-800">
            <IoSend className="fill-gray-400 transition text-xl duration-800 ease-in-out" />
          </button>
        ) : (
          <FaMicrophone
            className="fill-gray-500 h-8 absolute right-5 cursor-pointer"
            onClick={hearMic}
          />
        )
      }
    </div>
  );
}


export default SearchBar;
