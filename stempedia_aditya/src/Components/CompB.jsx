import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { InsertInput } from "../Redux/action";

const CompB = () => {
  const [word, setWord] = useState("");
  const dispatch = useDispatch();

  const handleInput = (e) => {
    // console.log(e.target.value)
    setWord(e.target.value);
    dispatch(InsertInput(e.target.value));
  };

  return (
    <div>
      <input
        style={{ width: "300px", height: "30px" }}
        type="text"
        onChange={(e) => handleInput(e)}
        placeholder="Type Here....."
      />
    </div>
  );
};

export default CompB;
