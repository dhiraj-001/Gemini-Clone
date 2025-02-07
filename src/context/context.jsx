import {createContext, useState} from "react"
import run from "../config/gemini"

export const Context = createContext()

const ContextProvider = (props) =>{
const [input , setInput] = useState("")
  const [result , setResult] = useState("")


const onSent = async (propmpt) =>{
  const res = await run(input)
  setResult(res)
}

  const contextVal = {
  input,
  setInput,
  result,
  setResult,
  onSent
  }

  return(
    <Context.Provider value={contextVal}>
      {props.children}
    </Context.Provider>
  )
}

export default ContextProvider;