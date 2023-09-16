import { Box, Button } from "@chakra-ui/react"
import React from "react"
export const Button1=({title,all})=>{
  return(
   <Box>
     <Button variant={all}>{title}</Button>
     </Box>
  )
}