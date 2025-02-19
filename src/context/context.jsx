import { createContext, useState, useRef } from "react";
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
  const timeoutsRef = useRef([]);
  const controllerRef = useRef(null);
  
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
    setOpen(!open);
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
    const timeoutId = setTimeout(() => {
      setResult((prev) => prev + nxtWord);
    }, i * 5);
    timeoutsRef.current.push(timeoutId);
  };

  const clearPreviousOperations = () => {
    // Clear all timeouts
    timeoutsRef.current.forEach((timeoutId) => clearTimeout(timeoutId));
    timeoutsRef.current = [];

    // Abort the previous fetch request
    if (controllerRef.current) {
      controllerRef.current.abort();
      controllerRef.current = null;
    }

    // Clear the result
    setResult("");
  };

  const onSent = async (val) => {
    clearPreviousOperations();

    setLoading(true);
    setPrevQ(val);
    setRecent(input);
  
    const currentInput = val ? val : input; // Store the current input value
    
    setInput("");
    controllerRef.current = new AbortController();
    const signal = controllerRef.current.signal;

    try {
      const res = await run(currentInput, { signal });
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
    
      for (let i = 0; i < newResArray.length; i++) {
        const nextWord = newResArray[i];
        delayPara(i, nextWord);
      }
    
      // Add the prompt with the current input value as the title
    
      addPrompt({ title: currentInput, prompt: res });
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Previous request was aborted");
      } else {
        console.error("Error fetching data:", error);
      }
    } finally {
      controllerRef.current = null;
      setLoading(false);
    }

    val = undefined;
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
