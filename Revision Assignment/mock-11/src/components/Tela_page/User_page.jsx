import { Box, Button, Input, Select, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const User_page = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [state, setState] = useState("");
  const [year, setYear] = useState("");

const navigate=useNavigate();

  const handleHome=()=>{
    navigate("/")
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      name: name,
      age: Number(age),
      state: state,
      year: year,
    };

    fetch(`https://mockserver97.herokuapp.com/api/data`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then(() => alert("data Successfully Added"));

    {
      setName("");
      setAge("");
      setState("");
      setYear("");
    }
  };

  return (
    <Box>
      <Text
        fontSize={"40px"}
        fontWeight="bold"
        color={"blue"}
        marginBottom="10px"
      >
        {" "}
        User_Page
      </Text>
<Box marginBottom={"30px"}>
    <Button onClick={handleHome} backgroundColor={"pink"}>Go to Homepage</Button>
</Box>
      <Box
        width={"30%"}
        margin="auto"
        padding={"20px"}
        boxShadow="rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
      >
        <Input
          type={"text"}
          placeholder="Enter user Name"
          marginBottom={"20px"}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type={"text"}
          placeholder="Enter user Age"
          marginBottom={"20px"}
          onChange={(e) => setAge(e.target.value)}
        />
        <Select placeholder="Select state" marginBottom={"20px"}
         onChange={(e) => setState(e.target.value)}
        >
          <option value="Maharashtra">Maharashtra</option>
          <option value="Rajasthan">Rajasthan</option>
          <option value="Gujrat">Gujrat </option>
          <option value="MadhaPradesh">MadhaPradesh </option>
          <option value="Banglore">Banglore </option>
        </Select>
        <Select placeholder="Select Year " marginBottom={"20px"}
         onChange={(e) => setYear(e.target.value)}
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020 </option>
          <option value="2019">2019 </option>
          <option value="2018">2018 </option>
        </Select>
        <Button backgroundColor={"green"} onClick={handleSubmit}>Submit</Button>
      </Box>
    </Box>
  );
};

export default User_page;
