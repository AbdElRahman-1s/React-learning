import {  useRef , useEffect} from 'react'
import { ChatMessage } from './ChatMessage';
import './ChatMessages.css'  
  
type ChatMessagesProps = {chatMessages: {message: string, sender: 'user' | 'robot', time: string, id: string}[]};


 function ChatMessages({chatMessages}: ChatMessagesProps) {

    const chatMessagesRef = useAutoScroll(chatMessages);

    function useAutoScroll(dependencies: React.DependencyList){ 
      const containerRef = useRef<HTMLDivElement | null>(null);
      useEffect(() => {
        const containerElem = containerRef.current;
        if(containerElem){
          containerElem.scrollTop = containerElem.scrollHeight;
        }
      },[dependencies]);

      return containerRef;
    }





  return (
    <div 
      className="chat-messages-container"
      ref={chatMessagesRef}
    >

    {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage 
          message= {chatMessage.message}
          sender= {chatMessage.sender}
          time = {chatMessage.time}
          key=  {chatMessage.id}
          />
        );
      })}
    </div>
  );

  }



  export default ChatMessages;