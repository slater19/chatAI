import React from 'react'

const Navbar = () => {
    
    const {handleMobileMenu} = useOutletContext();
    const isSmallDevice = useMediaQuery('(max-width : 800px)')
    const {setMode, mode}=useContext(ThemeContext)
  return (
    
    

        <Stack component={"header"}  p= {{xs:2,md:3}} direction={"row"}  alignItems={'center'} justifyContent= {'space-between'}>
        <Stack direction={"row"}  alignItems={'center'} spacing={2} >


         </Stack>
         </Stack>
  )
}

export default Navbar
