import React from 'react'


// import { ThemeContext } from "../../theme/themeContext";
// import styles from "./Home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import { Box , Stack, Typography,IconButton} from '@mui/material';
import { useOutletContext } from "react-router-dom";
import { useContext } from "react";
import data from '../../aidata/sampleData.json';

const Card = ({heading,subtext,handleClick }) => {
  return (
     
      <Stack
      bgcolor={'primary.light'}   p={{xs:1.2,md:3}} borderRadius={1} alignItems={'center'} justifyContent={'space-between'}
      spacing={1} direction={'row'} onClick={() => handleClick(heading)}
      >
      <Box>
      <Typography variant="heading" fontWeight={700} fontSize={{xs:14,md:20}}>{heading}</Typography>
      <Typography color={'text.secondary'} fontSize={{xs:10,md:16}}>{subtext}</Typography>
      </Box>
      <IconButton  size="small" sx={{ bgcolor: "primary.light" }}>
        </IconButton>

      </Stack>
  )
}

export default Card
