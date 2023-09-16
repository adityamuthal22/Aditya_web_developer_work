import { Container } from "@chakra-ui/react";
import { Provider } from "react-redux";
import "./App.css";
import MainRoutes from "./Pages/MainRoutes";
import { store } from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
    <Container>
      <MainRoutes />
    </Container>
     </Provider>
  );
}

export default App;
