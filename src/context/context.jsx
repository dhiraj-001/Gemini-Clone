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

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

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

  const onSent = async (prompt) => {
    setLoading(true);
    setResult("");
    setPrevQ(input);
    setInput("");
    const res = await run(input);
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
  };

  const contextVal = {
    input,
    setInput,
    result,
    setResult,
    onSent,
    prevQ,
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
  };

  return (
    <Context.Provider value={contextVal}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
