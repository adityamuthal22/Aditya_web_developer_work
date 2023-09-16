import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCountry, upadatecity } from "../Redux/action";

export const Editpage = () => {
const {id}=useParams();
const country=useSelector((state)=>state.Appreducer.countries)
const dispatch=useDispatch()
const navigate=useNavigate()

const [city,setCity]=useState("");
const [population,setPopulation]=useState("");


const updatehandler=(type)=>{
if(type === "cityPopulation"){
  dispatch(upadatecity(id,{
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
    const data=country.find(item=>item.id === Number(id))
    if(data){
      setCity(data.city)
      setPopulation(data.population)
    }
  }
},[id,country])
  return (
    <Box>
      <Heading>Edit Page</Heading>
      <Box>
        <Text>Capital City</Text>
        <Input data-cy="capital-city" value={city} onChange={(e)=>setCity(e.target.value)} />
      </Box>
      <Box>
        <Text>Population</Text>
        <Input data-cy="population" value={population} onChange={(e)=>setPopulation(e.target.value)} />
      </Box>
      <Button data-cy="update-button" onClick={()=>updatehandler("cityPopulation")}>Update</Button>
    </Box>
  );
};

export default Editpage;
