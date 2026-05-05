import { useState, useEffect } from 'react'
import { chatbot } from 'supersimpledev'
import { ChatInput } from './components/ChatInput'
import ChatMessages from './components/ChatMessages'
import './App.css'
import robotImage from './assets/robot.png'


function App() {
  const [chatMessages, setChatMessages] = useState((JSON.parse(localStorage.getItem('messages'))) || []);

  //const [chatMessages,setChatMessages] = array;

  //const chatMessages = array[0];
  //const setChatMessages = array[1];

  useEffect(() => {
    chatbot.addResponses({
      'bye': 'bye. ya beeh',
      'give me a unique id': function () {
        return `Sure! Here's a unique Id: ${crypto.randomUUID()}`;
      }
    });
  }, []);


  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(chatMessages));
  }, [chatMessages]);



 const title = `${chatMessages.length} Messages`;



  return (
    <div className="app-container">
      <title>{title}</title>
      <link rel="icon" type="image/svg+xml" href={robotImage} />

      {
        (chatMessages.length === 0) && (
          <p
            className="welcome-message"
          >
            Welcome to the chatbot project! Send a message using the textbox below.
          </p>
        )
      }

      <ChatMessages
        chatMessages={chatMessages}
      />

      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App
