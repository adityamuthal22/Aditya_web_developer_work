import React from "react";
import CompB from "./CompB";
import CompC from "./CompC";

const CompA = () => {
  return (
    <div
      style={{
        height: "200px",
        width: "40%",
        boxShadow:
          " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        margin: "auto",
        padding: "50px",
        marginTop: "100px",
        borderRadius:"10px"
      }}
    >
      <h1
      style={{color:"teal"}}
      >STEMpedia Assignment</h1>
      <CompB />
      <CompC />
    </div>
  );
};

export default CompA;
