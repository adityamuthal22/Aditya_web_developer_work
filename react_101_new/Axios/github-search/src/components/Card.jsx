import { Box, Img, Text } from "@chakra-ui/react";

export default function Card({ name, img }) {
  return (
    <Box p="1rem" display="flex" gap="1rem" alignItems="center">
      <Img height="60px" borderRadius="50%" src={img} />
      <Text fontWeight="bold">{name}</Text>
    </Box>
  );
}
