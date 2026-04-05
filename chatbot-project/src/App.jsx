import { useState,useEffect} from 'react'
import { chatbot} from 'supersimpledev'
import { ChatInput} from './components/ChatInput'
import ChatMessages from './components/ChatMessages'
import './App.css'


function App(){
  const [chatMessages,setChatMessages] = useState((JSON.parse(localStorage.getItem('messages'))) || []);
    
    //const [chatMessages,setChatMessages] = array;

    //const chatMessages = array[0];
    //const setChatMessages = array[1];
    
  useEffect(() => {
    chatbot.addResponses({
      'bye':'bye. ya beeh',
      'give me a unique id': function(){
        return `Sure! Here's a unique Id: ${crypto.randomUUID()}`;
      }
    });
  },[]);


  useEffect(()=> {
    localStorage.setItem('messages',JSON.stringify(chatMessages));
  },[chatMessages]);







    return (
    <div className="app-container">

      {
        (chatMessages.length === 0) &&(
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
