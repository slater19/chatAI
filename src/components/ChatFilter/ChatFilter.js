
import { Box , Select, MenuItem ,Typography} from '@mui/material';

import React, { useEffect, useState ,useRef} from "react";
import FeedbackModal from "../../components/FeedbackModal/FeedbackModal";
import InitialChat from "../../components/InitialChat/InitialChat";
import ChatInput from "../../components/ChatInput/ChatInput";
import ChattingCard from "../../components/ChattingCard/ChattingCard";
// import { ThemeContext } from "../../theme/themeContext";
// import styles from "./Home.module.css";
import Navbar from "../../components/Navbar/Navbar";

import { useOutletContext } from "react-router-dom";
import { useContext } from "react";
import data from '../../aidata/sampleData.json';
const ChatFilter = (allChat ,filterChat) => {
  
  
  const [option , setOption ] = useState("All Rating")


  const handleChange=(e)=>{
     setOption(e.target.value);
 }


  
  useEffect(() => {
    if(option=="All Rating")filterChat(allChat)
      else{
        const filtered = allChat.filter((item) => {
          let found=false;
          item.chat.forEach((ch) => {
            if(ch.rating==option){found=true;}
      }) 
      return found;})
      filterChat(filtered)}  
    }, []);

  return (
    <Box mb={3}>
    <Typography fontSize={12} mb={0.5}>Filter</Typography>
      <Select
    sx={{
      
      minWidth: 300,
    }}
    value={option}
    label="Age"
    onChange={handleChange}
  >
    <MenuItem value="All Rating">All Rating</MenuItem>
    <MenuItem value={1}>1</MenuItem>
    <MenuItem value={2}>2</MenuItem>
    <MenuItem value={3}>3</MenuItem>
    <MenuItem value={4}>4</MenuItem>
    <MenuItem value={5}>5</MenuItem>
  </Select>
</Box>
    
  )
}

export default ChatFilter
