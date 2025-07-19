import React, { useRef, useEffect } from 'react';

const ChatWidget = ({ chatbotId, style }) => {
  const containerIdRef = useRef('chatbot-widget-container-' + Math.random().toString(36).substr(2, 9));

  useEffect(() => {
    window.CHATBOT_CONFIG = {
      chatbotId,
      apiUrl: 'https://rankved-backend.onrender.com'
    };

    // Load script and style only once globally
    if (!window.__rankvedChatEmbedScriptLoaded) {
      const script = document.createElement('script');
      script.src = 'https://rank-ved-frontend-rfam.vercel.app/chat-embed.js';
      script.async = true;
      document.head.appendChild(script);

      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://rank-ved-frontend-rfam.vercel.app/chat-embed.css';
      document.head.appendChild(link);

      window.__rankvedChatEmbedScriptLoaded = true;
    }

    // Do not remove script or style on unmount to avoid duplicates

    return () => {
      // Only clean up CHATBOT_CONFIG on unmount
      delete window.CHATBOT_CONFIG;
    };
  }, [chatbotId]);

  return <div id={containerIdRef.current} style={style} />;
};

export default ChatWidget;

// Usage:
// <ChatWidget chatbotId='6b6a6d14-a251-44de-8c14-a1235c508913' style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 1000 }} />
