import {
  Box,
  Flex,
  Radio,
  RadioGroup,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  Td,
  Button
} from "@chakra-ui/react";
import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getCountry} from "../Redux/action"
import {Link, useLocation, useSearchParams} from "react-router-dom"
import {deletecity} from "../Redux/action"


const Homepage = () => {

 
  const dispatch=useDispatch()
  const country=useSelector((state)=>state.Appreducer.countries)
  

  const location=useLocation()
  const [searchParams,setsearchParams]=useSearchParams()

  const url=searchParams.getAll("sortBy")
  const [sortBy, setSortBy] = useState(url || null)

  const handleradioButton=(e)=>{
    setSortBy(e.target.value)
  }

  useEffect(() => {
    if (sortBy) {
      let params = {};
      sortBy && (params.sortBy = sortBy);
      setsearchParams(params);
    }
  }, [searchParams, sortBy]);

  const handledelete=(id)=>{
    dispatch(deletecity(id)).then(()=>dispatch(getCountry()))
  }

  useEffect(()=>{
    if(!country.length || location.search){
      const sortBy = searchParams.get("sortBy")
       const Params = {
        params: {
          _sort: sortBy && "population",
          _order: sortBy,
        },
      };
      dispatch(getCountry(Params))
    }
    else if(location.search===""){
        dispatch(getCountry())
    }
  },[dispatch,location.search])


  return (
    <Box onChange={handleradioButton}>
      <Flex padding="0 1rem" mb="2rem">
        <Text fontWeight="700" paddingRight="1rem">
          Sort by country population
        </Text>
        <RadioGroup  >
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
            {country?.length>0 && country.map((e)=>{
              return(
                <Tr key={e.id}>
                 <Td>{e.country}</Td>
                 <Td>{e.city}</Td>
                 <Td>{e.population}</Td>
                 <Td><Button backgroundColor="blue"><Link to={`/countries/${e.id}`}>Edit</Link></Button></Td>
                 <Td><Button backgroundColor="red" onClick={()=>handledelete(e.id)}>Delete</Button></Td>
                   </Tr>
              )
                
            })}
         
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Homepage;
