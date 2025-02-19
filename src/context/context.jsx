import { createContext, useState } from "react";
import run from "../config/gemini";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [prevQ, setPrevQ] = useState("");
  const [loading, setLoading] = useState(false);
  const [ismicOn, setMicon] = useState(false);
  const [open, setOpen] = useState(false);
  const [recent, setRecent] = useState("");
  const [prevs, setPrevs] = useState([]);

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const addPrompt = (prompt) => {
    setPrevs((prevs) => {
      // Check if the prompt already exists in the recent list
      const exists = prevs.some((prevPrompt) => prevPrompt.title === prompt.title);
      if (!exists) {
        return [...prevs, prompt];
      }
      return prevs;
    });
  };
  const toggleSidebar = () => {
    setOpen(!open)
  };

  const hearMic = () => {
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
    setMicon(true);
  };
  const offMIc = () => {
    SpeechRecognition.stopListening();
    setInput(transcript);
    setMicon(false);
    resetTranscript();
  };
  const delayPara = (i, nxtWord) => {
    setTimeout(() => {
      setResult((prev) => prev + nxtWord);
    }, i * 5);
  };

  const onSent = async (val) => {
    setLoading(true);
    setResult("");
    setPrevQ(val)
    setRecent(input);
  
    const currentInput = val ? val : input; // Store the current input value
    
    setInput("");
const res = await run(currentInput);
    // Use currentInput instead of input
    setLoading(false);
    let respArray = res.split("**");
    let newRes = "";
  
    for (let i = 0; i < respArray.length; i++) {
      if (i === 0 || i % 2 === 0) {
        newRes += respArray[i];
      } else {
        newRes += "</br></br><b>" + respArray[i] + "</b>";
      }
    }
  
    let newRes2 = newRes.split("*").join("</br>");
    let newResArray = newRes2.split("");
  
    setResult(""); // Clear result before starting to append new content
    for (let i = 0; i < newResArray.length; i++) {
      const nextWord = newResArray[i];
      delayPara(i, nextWord);
    }
  
    // Add the prompt with the current input value as the title
  
       addPrompt({ title: currentInput, prompt: res });
   
   
  
    val=undefined;
  
  };
  

  const contextVal = {
    input,
    setInput,
    result,
    setResult,
    onSent,
    prevQ,
    setOpen,
    setPrevQ,
    loading,
    setLoading,
    ismicOn,
    setMicon,
    hearMic,
    offMIc,
    transcript,
    listening,
    resetTranscript,
    open,
    toggleSidebar,
    recent,
    setRecent,
    prevs,
    setPrevs,
    browserSupportsSpeechRecognition,
    addPrompt,
  };

  return (
    <Context.Provider value={contextVal}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
