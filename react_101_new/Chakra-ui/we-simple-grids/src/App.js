import { Container } from "@chakra-ui/react";
import Grid from "./Components/Grid";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Container maxW="xl">
        <Grid />
      </Container>
    </div>
  );
}
