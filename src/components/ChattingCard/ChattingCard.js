
import axios from "axios";

import { Grid } from '@mui/material';

import styles from "./ChattingCard.module.css";
// import Modal from "../Modal/Modal";
// import Pagination from "../Pagination/Pagination"
import { Rating } from '@mui/material';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import format from "date-fns/format"; 
import ai from '../../assets/5208996.jpg';

import React, { useEffect, useState ,useRef} from "react";

// import { ThemeContext } from "../../theme/themeContext";
// import styles from "./Home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import { Box , Stack, Typography,IconButton} from '@mui/material';


const ChattingCard = (details,updateChat, setSelectedChatId,showFeedbackModal,readonly=false)=>{
    const [rating, setRating] = useState(0)
    const [isRating, setIsRating] = useState(false)
        
    useEffect(() => {
if(isRating){
updateChat(prev => 
  prev.map((item) => {
if(item.id==details.id){return{...item,rating:rating||0}}
else{return {...item}
}}))}}


    , [rating])  
        
return (  
       
  <Stack
  bgcolor={readonly ?'primary.main' :'primary.light'} p={{xs:1,md:2}} borderRadius={1} alignItems={'center'} justifyContent={'space-between'}
  spacing={{xs:1,md:3}} direction={'row'} 
  >
  <Box component="img" src={ai} width= {{xs:42,md:70}} height={{xs:42,md:70}} borderRadius={'50%'}>
  <Typography variant="heading" fontWeight={700} fontSize={{xs:14,md:20}}>{details.type=="AI" ?'Soul Ai' :'You'}</Typography>
  <Typography  fontSize={{xs:12,md:16}}>{details.text}</Typography>
  
  <Stack
    gap={1} alignItems={'center'} mt={1}
   direction={'row'} 
  >
<Typography  fontSize={{xs:8,md:12}} color={'text.secondary'}>{format(details.time,'hh mm:a')}</Typography>

{(details.type=="AI"&& !readonly) &&(
  <Stack
  className="feedback-btns"
 direction={'row'} 
>

  
    <IconButton  size="small" onClick={()=>setIsRating(prev => !prev)}>
    {!isRating &&<ThumbUpAltIcon fontSize='inherit'/>}
    {isRating &&<ThumbUpAltIcon fontSize='inherit'/>}
    
        </IconButton>
        <IconButton  size="small" onClick={()=>{setSelectedChatId(details.id)
          showFeedbackModal()
        }}>
        
        
        <ThumbUpAltIcon fontSize='inherit'/>
            </IconButton>

  </Stack>)} </Stack> 
  {((isRating||details.rating>0)&&details.type=="AI")&&(
    <Box pt={{xs:8,md:12}} 
    >
    <Typography component={'legend'} fontSize={{xs:10,md:12}} mb={0.5}>{readonly ?'Rating' :'Rate this response'}</Typography>
   
    <Rating name="simple" value={details.rating>0?details.rating :rating} onChange={(e,value1)=>setRating(value1)}
    sx={{width:'auto'}} readonly={readonly} /> 
    </Box>
)
}


 {details.feedback&&(
  <Typography fontSize={{xs:10,md:12}} pt={0.5}>
  <Box component={"span"} fontWeight={600}>feedback:</Box>
  <Box component={"span"} fontWeight={600}>{details.feedback}</Box>
  
  </Typography>
)}
</Box>
</Stack>
  )
}

export default ChattingCard
