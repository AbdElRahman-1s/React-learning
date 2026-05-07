import dayjs from 'dayjs'
import {useState} from 'react'
import {Chatbot} from 'supersimpledev';
import './ChatInput.css';
  
type ChatMessage = {
  message: string | React.ReactNode;
  sender: string;
  id: string;
  time?: number;
};

type ChatInputProps = {
  chatMessages: ChatMessage[];
  setChatMessages: (chatMessages: ChatMessage[]) => void;
};


  export function ChatInput({chatMessages,setChatMessages}: ChatInputProps){

    const [inputText , setInputText] = useState('');
    const [isLoading,setIsLoading] = useState(false);


    function saveInputText(event: React.ChangeEvent<HTMLInputElement>){
      setInputText(event.target.value);
    }

  async  function sendMessage(){

    if(isLoading || inputText === ''){
      return;
    }

    setIsLoading(true);

      const newChatMessages = [
        ...chatMessages,
        {
          message:inputText,
          sender:'user',
          id:crypto.randomUUID(),
          time: dayjs().valueOf()
        },
        {
          message:<img src="loading-spinner.gif" className="loading-spinner" />,
          sender:'robot',
          id:crypto.randomUUID()
        }
      ];


      setChatMessages(newChatMessages);

        setInputText('');

        const response = await(Chatbot.getResponseAsync(inputText));
        setChatMessages([
            ...newChatMessages.slice(0,newChatMessages.length-1),
            {
            message:response,
            sender:'robot',
            id:crypto.randomUUID(),
            time: dayjs().valueOf()
          }
        ]);


          setIsLoading(false);

      //setInputText('');
    }

    function keyHandler(event: React.KeyboardEvent<HTMLInputElement>){
      if(event.key === 'Enter'){
        sendMessage();
        return;
      }
      if(event.key === 'Escape'){
        setInputText('');
      }

    }


    function clearMessages(){
      setChatMessages([]);
    }



    
    return (
      <div className="chat-input-container">
        <input 
          placeholder="Send a Message to Chatbot" 
          size={30} 
          type="text" 
          onChange={saveInputText}
          value={inputText}
          onKeyDown={keyHandler}
          className="chat-input"
        />
        <button
          onClick={sendMessage}
          className="send-button"
        >Send</button>
        <button 
          onClick={clearMessages}
          className='clear-button'
        >
          Clear
        </button>
      </div>
    );
  }
