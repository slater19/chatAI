


// import { ThemeContext } from "../../theme/themeContext";
// import styles from "./Home.module.css";

import React, { useEffect, useState ,useRef} from "react";

// import { ThemeContext } from "../../theme/themeContext";
// import styles from "./Home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import { Box , Stack, TextField,Button} from '@mui/material';
import { useOutletContext } from "react-router-dom";
import { useContext } from "react";
import data from '../../aidata/sampleData.json';



const ChatInput = ({generatedResponse,setScroll,chat,clearChat}) =>{

  const [showSnackbar , setShowsnackbar ] = useState(false);
  const inputRef = useRef(null)
  const [input, setInput] = useState("")


  const handleSubmit=(e)=>{
    e.preventDefault()
    generatedResponse(input)
    setInput('')
    setScroll( prev => !prev)

  }


  const handleSave=()=>{
    const Chat_history = JSON.parse(localStorage.getItem("chat"))||[]
    const date1 = new Date()

    localStorage.setItem("chat",JSON.stringify([{ chat: chat, dateTime: date1 },...Chat_history]));

    clearChat()
    setShowsnackbar(true)

  }
  useEffect(() => {
    inputRef.current.focus();
}, []);


  return (
    <Box  flexShrink={0} px={{ xs: .5, md: 3 }}  pb={{ xs: 1, md: 3 }}   >
       <Box component={'form'}  onSubmit={handleSubmit}>
       <Stack direction={"row"} spacing={{ xs: .5, md: 2 }}  >
       <TextField
       placeholder='Messsage Bot Ai' 
          value={input}
          sx={{width:1, flex:1}}
          multiline
          rows={4}
          onChange={(e) => {
            setInput(e.target.value);
        }}
        required 
        inputRef={inputRef}
        />
        <Button variant="contained" type="submit" sx={{fontSize:{ xs: 12, md: 16} }}  >Ask</Button>
        <Button variant="outlined" onClick={handleSave} sx={{fontSize:{ xs: 12, md: 16} }} disabled={!chat.length>0}>Save</Button>

       </Stack>

        </Box>
       </Box>
    
  )
}

export default ChatInput
