import { Box, Button, Container, HStack, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

export default function Github() {
  const [user, setUser] = useState([]);
  const [text, setText] = useState("");
  const [page, setPage] = useState(1);

  const fetchData = () => {
    axios
      .get(
        `https://api.github.com/search/users?q=${text}&page=${page}&per_page=10`
      )
      .then((res) => setUser(res.data.items))
      .then((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, [page]);
  return (
    <Container
      boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
      padding="2rem"
      marginTop="20px"
      marginBottom="20px"
      borderRadius="10px"
      backgroundColor="pink"
    >
      <Box
        fontSize="4xl"
        padding="1rem"
        fontWeight="bold"
        color="brown"
        textDecoration="underline"
      >
        <Text>Github Users</Text>
      </Box>
      <HStack>
        <Input
          type="text"
          placeholder="Enter Text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button backgroundColor="orangered" onClick={fetchData}>
          Search
        </Button>
      </HStack>

      <Box>
        {user.map((user, i) => {
          return (
            <Card
              id={user.id}
              name={user.login}
              img={user.avatar_url}
              no={i + 1}
            />
          );
        })}
      </Box>
      {user.length > 0 && (
        <Box
          display="flex"
          justifyContent="center"
          gap="10px"
          alignItems="center"
        >
          <Button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            backgroundColor="lime"
            color="black"
          >
            PREV
          </Button>
          <Text textColor="red" fontWeight="bold">
            {page}
          </Text>
          <Button
            disabled={page === 10}
            onClick={() => setPage(page + 1)}
            backgroundColor="lime"
            color="black"
          >
            Next
          </Button>
        </Box>
      )}
    </Container>
  );
}
