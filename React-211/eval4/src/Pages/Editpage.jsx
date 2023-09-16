import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import {updatecity} from "../Redux/action"
import {getCountry} from "../Redux/action"
import {useNavigate} from "react-router-dom"

export const Editpage = () => {
  const {id}=useParams()
   const country=useSelector((state)=>state.Appreducer.countries)
   const dispatch=useDispatch()
   const navigate=useNavigate()
   
   const [city, setcity] = useState("")
   const [population, setpopulation] = useState("")
  
   const updatehandler=(type)=>{
    if(type==="cityPopulation"){
       dispatch(updatecity(id,{
      city:city,
      population:population
    })).then(()=>dispatch(getCountry()))
      navigate("/")
    }
   }

   useEffect(()=>{
    if(country.length===0){
      dispatch(getCountry())
    }
   },[dispatch,country.length])

  

   useEffect(()=>{
    if(country){
      const data=country.find(item=>item.id===Number(id))
      if(data){
        setcity(data.city)
        setpopulation(data.population)
      }
    }
   },[id,country])
  return (
    <Box>
      <Heading>Edit Page</Heading>
      <Box>
        <Text>Capital City</Text>
        <Input data-cy="capital-city" value={city} onChange={(e)=>setcity(e.target.value)}/>
      </Box>
      <Box>
        <Text>Population</Text>
        <Input data-cy="population" value={population} onChange={(e)=>setpopulation(e.target.value)}/>
      </Box>
      <Button data-cy="update-button" onClick={()=>updatehandler("cityPopulation")}>Update</Button>
    </Box>
  );
};

export default Editpage;
