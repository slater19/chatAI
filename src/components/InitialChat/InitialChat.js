import React from "react";
import Card from "./Card.js";
import { Box , Stack, Typography,Grid} from '@mui/material';
import Navbar from "../../components/Navbar/Navbar";
import data from '../../aidata/sampleData.json';
import FeedbackIcon from '@mui/icons-material/Feedback';

const InitialChat = ({generatedResponse }) => {

  const initialdata=[
    {heading:"Hi,what is the weather",subtext:"Getimmmediate Ai generated response"
    },
    {heading:"Hi,what is the location",subtext:"Getimmmediate Ai generated response"}
    ] 
  return (
    
    <Stack height={1} justifyContent= {'flex-end'}  p={{xs:2,md:3}}  >
        
    <Stack spacing={2} my={5} alignItems={'center'}>
    <Typography variant="h2">How can I help you today?</Typography>
    <Box component="img" src={FeedbackIcon} width= {{xs:42,md:70}} height={{xs:42,md:70}} borderRadius={'50%'}/>



        </Stack>
    
        
        <Grid container spacing={{xs:1,md:3}} >
        {initialdata.map(item=>(
        <Grid item key={item.heading} xs={12} md={6}>
        <Card  heading={item.heading} subtext={item.subtext} handleClick={generatedResponse} /></Grid>))}
        </Grid>
    </Stack>
    
        
    
  )
}

export default InitialChat;
