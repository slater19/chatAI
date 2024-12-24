
import React, { useEffect, useState ,useRef} from "react";
import FeedbackModal from "../../components/FeedbackModal/FeedbackModal";
import InitialChat from "../../components/InitialChat/InitialChat";
import ChatInput from "../../components/ChatInput/ChatInput";
import ChattingCard from "../../components/ChattingCard/ChattingCard";
// import { ThemeContext } from "../../theme/themeContext";
import styles from "./Home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import { Box , Stack, Typography} from '@mui/material';
import { useOutletContext } from "react-router-dom";
import { useContext } from "react";
import data from '../../aidata/sampleData.json';

const Home = () => {

  const [showModal, setShowModal] = useState(false);
  const listref = useRef(null)
  const [chatId , setChatId] = useState(1);
  const [selectedChatId, setSelectedChatId] = useState(false);
  const [scrollToBottom, setScrollToBottom] = useState(false);
  const {chat, setChat } = useOutletContext();
  // const { mode} = useContext(ThemeContext);

  const generatedResponse=(input)=>{
    const response=data.find((item) =>input.toLowerCase()==item.question.toLowerCase());
    let answer ="Sorry did not understand your query"

    if(response!=undefined)answer=response.response

    setChat (prev => ([...prev,{
    type:'Human',
    text:input,
    time:new Date(),
    id:chatId,
    },{
      type:'AI',
    text:answer,
    time:new Date(),
    id:chatId+1,
    }]))
    setChatId(prev =>prev+2)
 
  }
  useEffect(() => {
    listref.current?.lastElementChild?.scrollIntoView()
}, [scrollToBottom]);
   
return (
  <Stack height={'100vh'} justifyContent= {'space-evenly'}  sx={{background: 'linear-gradient(to right bottom, #36EAEF, #6B0AC9)',} }>
  {/* <Navbar/> */}
  {/* <Box  p={{ xs: .5, md: 3 }}  pb={{ xs: 1, md: 3 }}   > */}
  {chat.length==0 && <InitialChat generatedResponse={generatedResponse}/> }
  {chat.length>0 && (<Stack height={1} flexGrow={0} p={{xs:2,md:3}}   sx={{background: 'linear-gradient(to right bottom, #36EAEF, #6B0AC9)',} }
  ref={listref}
  >
    {chat.map((item, index) => (
<ChattingCard
details={item} key={index} updateChat={setChat} setSelectedChatId={setSelectedChatId} showFeedbackModal={() => setShowModal(true)}
/>))}
  </Stack>)}

  <ChatInput
  generatedResponse={generatedResponse} setScroll={setScrollToBottom} chat={chat} setSelectedChatId={setSelectedChatId} showFeedbackModal={() => setShowModal(true)}
/>
  <FeedbackModal
  open={showModal} updateChat={setChat} chatId={selectedChatId}  handleClose ={() => setShowModal(false)}
/>
</Stack>
  )
}

export default Home
