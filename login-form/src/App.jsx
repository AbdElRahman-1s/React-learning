import { useState } from "react";
import './App.css'

function App(){

const [showPassword,setShowPassword] = useState(false);


function showHide(){
if(!showPassword){
  setShowPassword(true);
}
else{
  setShowPassword(false);
}
}

return (
<div className="container-div">
  <h3 
  className="title"
  >
  Hello,Welcome to mywebsite
  </h3>
  <div>
    <input 
      type="text" 
      placeholder="Email" 
      className="email-input"
      />  
  </div>            
  <div>
    <input 
      type={!showPassword? 'password' : 'text'} 
      placeholder="Password"
      className="password-input" 
      /> 
      <button onClick={showHide}>
        {!showPassword? 'Show' : 'Hide'}
      </button>
  </div>

  <button className="login-button">
    Login
  </button>
  <button className="signUp-button">
    Sign Up
  </button>
  
</div>
);
}


export default App;