


// import { ThemeContext } from "../../theme/themeContext";
// import styles from "./Home.module.css";
// import Navbar from "../../components/Navbar/Navbar";
import { Box , Stack, Typography} from '@mui/material';
import { useOutletContext } from "react-router-dom";
import { useContext } from "react";
import data from '../../aidata/sampleData.json';
import React, { useEffect, useState ,useRef} from "react";
import ChatFilter from "../../components/ChatFilter/ChatFilter";
import ChatHistoryCard from "../../components/ChatHistoryCard/ChatHistoryCard";
import Navbar from "../../components/Navbar/Navbar";




const History = () => {
    const [chat , setChat] = useState([]);
    const [filterChat , setFilterChat] = useState([]);

    useEffect(() => {
        const localChat  = JSON.parse(localStorage.getItem("Chat"))||[]
        if(localChat.length>0){
            setChat(JSON.parse(localChat))
            setFilterChat(JSON.parse(localChat))
        }
    
        
    }, []);

  return (
    
      <Box height={'100vh'} >
  <Navbar/>
  <Box  p={{ xs: 2, md: 3 }}>
  <Typography variant="h2">Conversation History</Typography>
 
  {chat.length>0 && <ChatFilter allChat={chat} filterChat={setFilterChat}/>}
   {chat.length==0 && <Typography textAlign={'center'} p={4} bgcolor={'primary.light'} borderRadius={2}>No saved chats</Typography>}
   {chat.length>0 && filterChat.length==0 && <Typography  p={4} textAlign={'center'}  bgcolor={'primary.light'} borderRadius={2}>No such chats</Typography>}
   
   
   {filterChat.length>0 &&
   <Stack spacing={4}>
  
  
    {filterChat.map((item, index) => (
<ChatHistoryCard 
details={item} key={index} />

    ))}
   
    </Stack>}
    </Box></Box>

 
  ) 
}

export default History
