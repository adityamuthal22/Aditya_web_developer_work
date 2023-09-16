import { Button1 } from "./Components/Buttton1";
import { Header } from "./Components/Header";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header all="h1" title="Heading 1" />
      <Header all="h2" title="Heading 2" />
      <Header all="h3" title="Heading 3" />
      <br />
      <Button1 all="solid" title="Primary" />
      <br />
      <Button1 all="ghost" title="Secondary" />
    </div>
  );
}
