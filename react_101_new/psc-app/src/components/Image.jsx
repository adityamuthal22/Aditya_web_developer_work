import React from "react";

const Image = ({ src, name, width, height }) => {
  return (
    <img
      style={{ objectFit: "cover", borderRadius: "0.5rem" }}
      src={src}
      width={width}
      height={height}
      name={name}
      alt=""
    />
  );
};

export default Image;
