import React from "react";
import { useSelector } from "react-redux";

const CompC = () => {
  const inputValue = useSelector((store) => store.inputValue);
  return (
    <div>
      <h1>This is Input Value:-</h1>
      <h2>{inputValue.InputValue}</h2>
    </div>
  );
};

export default CompC;
