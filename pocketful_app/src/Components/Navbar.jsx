import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { CiInstagram, CiTwitter } from "react-icons/ci";
import { MdSportsSoccer } from "react-icons/md";
import { SiMedium } from "react-icons/si";

const Navbar = () => {
  return (
    <Flex
      h={"60px"}
      border="2px solid black"
      borderTop={"none"}
      borderLeft="none"
      borderRight={"none"}
      padding={"10px"}
      justifyContent="space-between"
    >
      <Flex gap={"20px"} alignItems="center">
        <Button borderRadius={"50%"} bg="pink">
          D
        </Button>
        <Text>LEARN</Text>
        <Text>BLOG</Text>
        <Text>BOOKMARKS</Text>
        <Text>UI KIT</Text>
        <Text>LAIN NYA</Text>
      </Flex>
      <Flex alignItems="center" fontSize={"20px"} gap="20px">
        <Text>
          <CiTwitter />
        </Text>
        <Text>
          <CiInstagram />
        </Text>
        <Text>
          <MdSportsSoccer />
        </Text>
        <Text>
          <SiMedium />
        </Text>
      </Flex>
    </Flex>
  );
};

export default Navbar;
