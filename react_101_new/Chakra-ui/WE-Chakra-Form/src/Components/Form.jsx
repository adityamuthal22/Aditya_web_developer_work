import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Button, Heading, Input, Menu, MenuButton, MenuItem, MenuList, PinInput, PinInputField, Select, Stack, Text } from "@chakra-ui/react"
import { useState } from "react"

function Form(){
  const [otp,setOtp]=useState("")
  const [loading,setLoading]=useState(false);
return(
  <Box style={{width:"70%"}}>
<Heading>Form</Heading>
<Stack direction="column" gap="0.5rem">
<Box>
  <Input type="email"  placeholder="email"/>
</Box>
<Box>
  <Input type="password"  placeholder="password"/>
</Box>


<Box>
<PinInput value={otp} onChange={(value)=>setOtp(value)}otp>
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>
</Box>
<Box>
  <Text>{otp}</Text>
</Box>
<Box>
<Select placeholder='Select option'>
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select>
</Box>
<Box>
<Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Actions
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
</Box>
<Box>
<Button
         backgroundColor="red"
            bg="brand.900"
            onClick={() => {
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
              }, 2000);
            }}
            isLoading={loading}
          >
            {" "}
            SIGN UP{" "}
          </Button>
</Box>
</Stack>
  </Box>
)
}

export default Form