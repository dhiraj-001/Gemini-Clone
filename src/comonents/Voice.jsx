import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Voice = () => {
  const [para, setpara] = React.useState('')
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button 
        onClick={() => {SpeechRecognition.startListening({ continuous: true, language: 'en-IN' })
      
      }}
        className='w-10 h-10 border-amber-50 border-2 hover:border-amber-500'
      >
        Start
      </button>
      <button 
        onClick={SpeechRecognition.stopListening}
        className='w-10 h-10 border-amber-50 border-2'
      >
        Stop
      </button>
      <button 
        onClick={resetTranscript}
        className='w-10 h-10 border-amber-50 border-2'
      >
        Reset
      </button>
      <button onClick={()=>{
        setpara("buttn clicked")
      }}>click me </button>
      <p>{para}</p>
      <p>text: {transcript}</p>
    </div>
  );
};

export default Voice;
