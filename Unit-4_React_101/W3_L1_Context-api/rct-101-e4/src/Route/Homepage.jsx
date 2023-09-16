import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from "@chakra-ui/react";
import React from "react";

function AddHospital() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  function handleSubmit() {}

  return (
    <>
      <Button onClick={onOpen}>Add Hospital</Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Hospital name</FormLabel>
              <Input ref={initialRef} placeholder="Hospital name" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel> Address</FormLabel>
              <Input placeholder="Address" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Submit
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

function AddDoctor() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  function onsubmit() {}

  return (
    <>
      <Button onClick={onOpen}>Add Doctor</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Doctor name</FormLabel>
              <Input ref={initialRef} placeholder="Doctor name" />
            </FormControl>
            <br />
            <FormControl>
              <Menu>
                <MenuButton as={Button}>Hospital</MenuButton>
                <MenuList>
                  <MenuItem>Sara</MenuItem>
                  <MenuItem>Apollo</MenuItem>
                  <MenuItem>manas </MenuItem>
                </MenuList>
              </Menu>
            </FormControl>
            <br />
            <FormControl>
              <Menu>
                <MenuButton as={Button}>Specialization</MenuButton>
                <MenuList>
                  <MenuItem>Nephrology</MenuItem>
                  <MenuItem>General</MenuItem>
                  <MenuItem>Radiologist</MenuItem>
                </MenuList>
              </Menu>
            </FormControl>
            <br />
            <FormControl>
              <FormLabel>Salary</FormLabel>
              <Input ref={initialRef} placeholder="Type salary" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onsubmit}>
              Submit
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default function Homepage() {
  return (
    <>
      <Container>
        <Box display="flex" justifyContent="center" gap="30px">
          <AddHospital />
          <AddDoctor />
        </Box>
      </Container>
    </>
  );
}
