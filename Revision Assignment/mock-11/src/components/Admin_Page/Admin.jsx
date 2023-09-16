import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Admin = () => {

    const navigate=useNavigate()

    function handleLogin(){
      navigate("/login")
    }

    function handleList(){
        navigate("/list")
      }

      function handleReport(){
        navigate("/report")
      }

  return (
    <Box
    display={"flex"}
    backgroundColor="teal"
    justifyContent={"center"}
    gap="30px"
    height={"50px"}
    alignItems="center"

    fontSize="25px"
    >
   <Button onClick={handleLogin}>Login</Button>
   <Button onClick={handleList}>ListPage</Button>
   <Button onClick={handleReport}>Report</Button>
   

    </Box>
  )
}

export default Admin