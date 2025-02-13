import React, { useContext, useState } from "react";
import TopBar from "./TopBar"; // Assuming TopBar is imported

import SearchBar from "./SearchBar";

import ResultBox from "./ResultBox";
import Sidebar from "./Sidebar";
import LoadingSpinner4 from "./Loading";
import { Context } from "../context/context";
import Voice from "./Voice";
function Home() {
  const { loading } = useContext(Context);
  return (
    <div className="">
      <TopBar />
      <Voice/>
      <div className="flex justify-center items-center overflow-hidden relative">
        <ResultBox />
        {loading && (
          <div className="absolute left-5 top-3 m-5">
            <LoadingSpinner4 />
          </div>
        )}

        <div className="flex-col fixed bottom-0 pb-2 pt-3 w-full flex items-center shad backdrop-blur-sm rounded-t-xl ">
          <SearchBar />
          <div className="text-[10px] mt-2 font-body text-[#ffffff79]">
            Ai can make mistakes
            <span className="text-[10px] text-[rgba(138,191,255,0.7)]">
              {" "}
              @All right reserved
            </span>
            <span className="text-[10px] text-[rgba(138,191,255,0.7)]">
              {" "}
              &#169;dhiraj
            </span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
