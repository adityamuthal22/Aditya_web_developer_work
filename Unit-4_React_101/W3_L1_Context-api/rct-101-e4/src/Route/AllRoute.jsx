import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";

export default function AllRoute() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}
