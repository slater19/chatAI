import logo from './logo.svg';
import './App.css';
// import BOTAI from './BOTAI.js'
import React, { useMemo,useState,useEffect } from 'react';
import Grid from '@mui/material/Grid2';
import {
  
  createTheme,
  
  ThemeProvider
} from "@mui/material/styles"
import CssBaseline from '@mui/material/CssBaseline';


import { Outlet } from 'react-router-dom';
// import { getThemePalette  } from './theme/ThemePalette';
// import { ThemeContext  } from './theme/ThemeContext';


function App() {

  const [mode, setMode] = useState(localStorage.getItem("theme")||'light ');
  const [menuOpen, setMenuopen] = useState(false);
  const [chat , setChat] = useState([]);
  
  // const theme  = useMemo(() => {
  //   // complex logic code will goes here
  //   createTheme(getThemePalette(mode))
  // }, [mode]);
  
  // useEffect(() => {
  //   // Effect logic
  //   localStorage.setItem("theme", mode);
  // }, [mode]);
  
  
  


  return (
    
    // <ThemeContext.Provider value={{mode:mode,setMode:setMode}}> 
    // <ThemeProvider theme={theme}>
    <>
     <CssBaseline/> 
     <Grid container sx={{background: "linear-gradient(rgba(215,199,244,0.2), rgba(151,133,186,0.2)"}}>
  <Grid item xs={12} md={2.5} sx={{bgcolor :'primary.light'}} position={{xs:'fixed',md:'relative'}} height={'100vh'} zIndex={{xs:9999,md:1}}>
  {/* <Sidebar  setChat={setChat} chatId={selectedChatId}    closeMenu ={() => setMenuopen(false)}/> */}
  </Grid> 
  <Grid item xs={12} md={9.5}>
  <Outlet context={{setChat:setChat ,chat: chat,handleMobileMenu :setMenuopen}}/>
  </Grid>
 
</Grid>
     {/* </ThemeProvider> */}

   {/* </ThemeContext.Provider> */}
  </>
  );     
}

export default App;
