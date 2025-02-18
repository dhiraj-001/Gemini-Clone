import React, { useContext, useRef, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { Context } from "../context/context";
import LoadingSpinner4 from "./Loading";
import { FaStopCircle } from "react-icons/fa";

const Voice = () => {
  const { ismicOn, offMIc, transcript } = useContext(Context);
  const { browserSupportsSpeechRecognition } = useSpeechRecognition();
 
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    
    <div
      className={`absolute border-t-[1px] p-6 ${
        !ismicOn ? "hidden" : "animate-slide-up"
      } w-full h-[50vh] z-10 backdrop-blur-lg rounded-2xl bottom-0 border-[#8267cf] transition-all duration-500 ease-in-out`}
    >
      <span className="">
        <LoadingSpinner4 text={"Listening ... "} />
      </span>

      <button
        onClick={offMIc}
        className="p-3 border-[#ac81e8] shad transition-colors duration-300 hover:border-[#ccbfff] cursor-pointer rounded-2xl border-2 flex items-center justify-center absolute bottom-2 right-3"
      >
        <FaStopCircle
          className="text-4xl fill-[#d7bbfe]"
          onClick={() => {
            setxVal(0);
          }}
        />
      </button>
      {/* <button 
        onClick={resetTranscript}
        className='w-10 h-10 border-amber-50 border-2'
      >
        Reset
      </button> */}
      <p className="text-[#ffffffb9] font-mini md:text-xl text-md">
        {transcript}
      </p>
    </div>
  );
};

export default Voice;
