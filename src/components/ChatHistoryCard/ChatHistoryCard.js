
import styles from "./ChatHistoryCard.module.css";

import React, { useEffect, useState ,useRef} from "react";
import ChattingCard from "../../components/ChattingCard/ChattingCard";
// import { ThemeContext } from "../../theme/themeContext";
// import styles from "./Home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import { Box , Stack, Typography} from '@mui/material';
import { useOutletContext } from "react-router-dom";
import { useContext } from "react";
import data from '../../aidata/sampleData.json';

const ChatHistoryCard = ( {details})=>{

  const formatDate=(date)=>{
    const today=startOfDay(new Date());

    if(isEqual(date,today))return `Today's chat`

    else if(isEqual(today,add(date,{days:1})))return `Yesterday's chat`
    else{return format(date,'do LLL YYYY')}
  }
  
  return (
<Box>
<Typography  fontWeight={700} mb={2}>{details.type=="AI" ?'Soul Ai' :'You'}</Typography>
<Stack  spacing={{ xs: 2, md: 3 }}  >
{details.chat.map((item, index) => {
<ChattingCard 
details={item} key={index} readonly={true}/>})}

    </Stack>
    </Box>



  )
}
    
    export default ChatHistoryCard