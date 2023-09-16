import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Shoes from "./Components/Shoes/Shoes";
import { Routes, Route } from "react-router-dom";
// import ShoeCard from "./Components/Shoes/ShoeCard/ShoeCard";

function App() {
  return (
    <div>
      {/* Code goes here */}

      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Shoes />}></Route>
        {/* <Route path="/shoecard" element={<ShoeCard />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
