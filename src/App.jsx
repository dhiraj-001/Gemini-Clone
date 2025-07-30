import { useState } from "react";

import TopBar from "./comonents/TopBar";
import Sidebar from "./comonents/Sidebar";
import Home from "./comonents/Home";
import ChatWidget from "./comonents/chatbot";

function App() {
  return (
    <div>  
<ChatWidget chatbotId="69e4c724-2aa1-447c-8d4b-52812d77ba08" />
      <Home />
    </div>
  );
}

export default App;
