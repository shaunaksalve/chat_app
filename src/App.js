import React, { useEffect, useState } from 'react';
import { Button, FormControl, Input, InputLabel } from "@mui/material"
import './App.css';
import Message from './Message';

function App() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([{username:"shaunak",text:"hello"},{username:"spiderman",text:"Hi!!"}])
  const [username,setUsername]=useState("")
  
useEffect(()=>{
//run code here
setUsername(prompt("Please Enter Your Name"))
},[])//condition


//all the logic to send the message goes here
  const sendMessage = (event) => {
    setMessages([...messages,{username:username,text:input}])
    setInput("")
    event.preventDefault()
  }
  return (
    <div className="App">
      <h1>Hello Everyone</h1>
      <h2>Welcome {username}</h2>
      {/* input field */}
      <form>
        <FormControl>
          <InputLabel>Enter a Message</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
          <Button disabled={!input} variant='contained' color='primary' type='submit' onClick={sendMessage}>Send Message</Button>

        </FormControl>
        
        {/* button */}

      </form>
      {/* messeges themselves */}
      {messages.map(message => (<Message username={message.username} text={message.text}/>))}
    </div>
  );
}

export default App;
