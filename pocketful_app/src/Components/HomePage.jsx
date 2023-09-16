import { Box, Center, Flex, Image, Stack, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import styles from "./styles/HomePage.module.css";
const HomePage = () => {
  const [data, setData] = useState([]);

  const GetAPI = () => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=Apple&from=2022-12-07&sortBy=popularity&apiKey=a618d35eb9f944ecafc40a79ad27d57d"
      )
      .then((data) => setData(data.data.articles))
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    GetAPI();
  }, []);
  console.log(data);
  return (
    <Box>
      <Navbar />
      <Box margin={"auto"} w="100%" marginTop={"10px"} padding="20px">
        <Box
          display={"flex"}
          border="2px solid black"
          borderTop={"none"}
          borderLeft="none"
          borderRight={"none"}
          // borderBottom="10px"
        >
          <Box w="50%" textAlign="left">
            <Image
              h="400px"
              w="100%"
              src="https://ichef.bbci.co.uk/news/1024/branded_news/11A10/production/_127880227_2.jpg"
            />
            <Text fontWeight={"bold"}>
              Priyanka Chopra Jonas on Bollywood: 'I’d earn 10% of my male
              co-actor’s salary'
            </Text>
            <Text color={"grey"}>
              The actress spoke about her experience with pay parity, body
              shaming and the pressure of social media.
            </Text>
          </Box>
          <Box marginLeft={"20px"} w="60%">
            <Flex textAlign="left" gap={"10px"}>
              <Image
                h="100px"
                w={"30%"}
                src="https://ichef.bbci.co.uk/news/1024/branded_news/D34A/production/_127909045_f71a4a10-cfe6-4197-838f-d63fbe12d01a.jpg"
              />
              <Text fontWeight={"bold"}>
                An annual poll suggests that women, on average worldwide, are
                getting angrier. Why might this be?
              </Text>
            </Flex>
            <Flex marginTop={"60px"} textAlign="left" gap={"10px"}>
              <Image
                h="100px"
                w={"30%"}
                src="https://www.reuters.com/resizer/YJ0SGJAeWgUFIue8fYCfwrelja0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/N3ZQY2OQ7BMG5DOANNZVBIL7YA.jpg"
              />
              <Text fontWeight={"bold"}>
                The battered Indian rupee will not recoup most of its recent
                losses over the coming year thanks to a persistent current
                account deficit and a central bank nearing the end of its
                rate-hiking cycle, a Reuters poll found.
              </Text>
            </Flex>
            <Flex marginTop={"60px"} textAlign="left" gap={"10px"}>
              <Image
                h="100px"
                w={"30%"}
                src="https://www.reuters.com/resizer/Ll7GVsf8zHpcG5ugfCXcZxN3RdI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/AWBK7DQS4JKWJEUM7ND6HQ4FHU.jpg"
              />
              <Text fontWeight={"bold"}>
                Indian shares were tipped to open slightly lower on Wednesday,
                ahead of a widely expected interest rate hike, with traders
                waiting for details on the central bank's outlook in its fight
                against domestic inflation.
              </Text>
            </Flex>
          </Box>
        </Box>

        <Box marginTop={"30px"}>
          <Box className={styles.MainDiv}>
            {data.map((ele, i) => {
              return (
                <Stack key={i} className={styles.AllDiv}>
                  <Center>
                    <Box className="HomePagemainStack">
                      <Image
                        width={"500px"}
                        src={ele.urlToImage}
                        alt=""
                        className={styles.Image1}
                      />
                      <Text>{ele.publishedAt}</Text>
                      <Text fontSize={22} fontWeight={"bold"} w>
                        {ele.title}
                      </Text>

                      <Text w={"400px"}>{ele.description}</Text>
                    </Box>
                  </Center>
                </Stack>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
