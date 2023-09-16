import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
    const navigate=useNavigate()

    function handleTesla(){
      navigate("/user")
    }

    function handleAdmin(){
        navigate("/admin")
      }


  return (
    <div>
        
        <Box 
      width="100%"
    >
    <Box backgroundColor={"teal"}
    display={"flex"}
    justifyContent="center"
    gap={"50px"}
    alignItems="center"
    height={"50px"}
    > 
        <Text color="Orange" fontSize={"30px"}  fontWeight={"bold"}> Tesla India </Text>    
        <Button _hover="none" backgroundColor="blueviolet" color="white" 
        width="200px"
        fontSize="30px"
        borderRadius="20px"
        border="none"
      padding={"10px"}
        box-shadow={"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}
        onClick={handleTesla}>Tesla_Section</Button>
       
        <Button _hover="none" backgroundColor="blueviolet" color="white"  
        width="300px"
        fontSize="30px"
        borderRadius="20px"
        border="none"
        padding={"10px"}
        box-shadow={"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}
        onClick={handleAdmin}>Admin_Section</Button>
        
 
    </Box>
    </Box>
    </div>
  )
}

export default Homepage