import React from "react";
import { Box, Text } from "@chakra-ui/react";
export const Header = ({ all, title }) => {
  return (
    <Box>
      <Text textStyle={all}>{title}</Text>
    </Box>
  );
};
