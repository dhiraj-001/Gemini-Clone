import { useState } from "react";

import TopBar from "./comonents/TopBar";
import Sidebar from "./comonents/Sidebar";
import Home from "./comonents/Home";
import ChatWidget from "./comonents/chatbot";

function App() {
  return (
    <div>  
<ChatWidget chatbotId='6b6a6d14-a251-44de-8c14-a1235c508913' style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 1000 }} />
      <Home />
    </div>
  );
}

export default App;
