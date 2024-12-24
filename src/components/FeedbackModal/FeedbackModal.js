

import React, { useEffect, useState ,useRef} from "react";

// import { ThemeContext } from "../../theme/themeContext";
// import styles from "./Home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import { Box , Stack, Typography,Modal,IconButton,TextField,Button} from '@mui/material';
import FeedbackIcon from '@mui/icons-material/Feedback';
import CloseIcon from '@mui/icons-material/Close';
import { useOutletContext } from "react-router-dom";
import { useContext } from "react";
import data from '../../aidata/sampleData.json';

const FeedbackModal = ({open ,updateChat, chatId  ,handleClose}) => {

  const [input, setInput] = useState("")
  const style = {
    position: 'absolute',
    top: '50%',
    left:'50%',
    color: "white",
    bgcolor: "primary.bgtheme ",
    p: {xs:2,md:3},
    borderRadius:'10px',
    width:'95%',
    maxWidth:720
    
  };
  const handleSubmit=(event)=>{
    event.preventDefault()
    updateChat(prev => 
      prev.map((item) => {
    if(item.id==chatId){return{...item,feedback:input}}
    else{return {...item}
    }
  })
)
    setInput("")
    handleClose()
  }  
    
 return (
    <Modal open={open} onClose={handleClose}>
    <Box sx={style}>
    <Stack direction={"row"} spacing={2} alignItems={'center'} justifyContent= {'space-between'}>
    <Stack direction={"row"} spacing={{ xs: .5, md: 2 }}  alignItems={'center'} >
    <FeedbackIcon/>
    <Typography variant={"heading"} fontSize={{xs:14,md:18}}>Provide Additional Feedback</Typography>
    </Stack>
    <IconButton onClick={handleClose}>
      <CloseIcon/>
    </IconButton>
    </Stack>
    
    
  <Box component='form' pt={3}   sx={{ display:"flex" ,flexDirection:"column" ,alignItems:"flex-end", gap:"12px"}} onSubmit={handleSubmit}>
  <TextField
          value={input}
          sx={{width:1}}
          multiline
          rows={4}
          onChange={(e) => {
            setInput(e.target.value);
        }}
        required 
        />
        <Button variant="contained" type="submit">Submit</Button>
</Box></Box></Modal>
     
  
  )
}

export default FeedbackModal
