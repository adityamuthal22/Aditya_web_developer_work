import {
  Box,
  Button,
  Flex,
  Radio,
  RadioGroup,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { deletecity, getCountry } from "../Redux/action";

const Homepage = () => {
const dispatch =useDispatch();
const country=useSelector((state)=>state.Appreducer.countries)
console.log(country)

const location=useLocation();
const [serachParams,setserachParams] =useSearchParams();

const url=serachParams.getAll("sortBy");
const [sortBy,setSortBy]=useState(url || null)

const handleradioButton=(e)=>{
setSortBy(e.target.value)
}

useEffect(()=>{
  if(sortBy){
    let params={};
    sortBy && (params.sortBy = sortBy);
    setserachParams(params);
  }
},[serachParams,sortBy])

const handledelete=(id)=>{
  dispatch(deletecity(id)).then(()=>dispatch(getCountry()))
}

useEffect(()=>{
  if(!country.length || location.search){
    const sortBy = serachParams.get("sortBy")
    const Params={
      params:{
        _sort:sortBy && "population",
        _order:sortBy,
      },
    };
    dispatch(getCountry(Params))
  }else if(location.search ===""){
      dispatch(getCountry())
  }
 
},[dispatch,location.search])

  return (
    <Box onChange={handleradioButton}>
      <Flex padding="0 1rem" mb="2rem">
        <Text fontWeight="700" paddingRight="1rem">
          Sort by country population
        </Text>
        <RadioGroup>
          <Stack direction="row">
            <Radio data-cy="asc" value="asc">
              Ascending
            </Radio>
            <Radio data-cy="desc" value="desc">
              Descending
            </Radio>
          </Stack>
        </RadioGroup>
      </Flex>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Country</Th>
              <Th>Capital</Th>
              <Th>Population</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody data-cy="table-body">
            {/* map through the fetched country list, to form table rows */}
        {
          country?.length>0 && country.map((e)=>{
            return(
              <Tr key={e.id}>
              <Td>{e.country}</Td>
              <Td>{e.city}</Td>
              <Td>{e.population}</Td>
              <Td><Button backgroundColor="teal"><Link to={`/countries/${e.id}`}>Edit</Link></Button></Td>
              <Td><Button backgroundColor="red" onClick={()=>handledelete(e.id)}>Delete</Button></Td>
            </Tr>
            )
          })
        }
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Homepage;
