import { Container } from "@chakra-ui/react";
import AirbnbCard from "./Components/AirbndCard";
import ButtonExample from "./Components/Button";
import Form from "./Components/Form";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* <AirbnbCard />
      <br />
      <br />
      <br />
      <ButtonExample /> */}
      <Container maxW="xl">
        <Form />
      </Container>
    </div>
  );
}
