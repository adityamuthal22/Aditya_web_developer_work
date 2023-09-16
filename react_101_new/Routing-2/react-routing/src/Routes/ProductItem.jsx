import React from "react";
import { Link } from "react-router-dom";

export function ProductItem({ data }) {
  return (
    <div>
      <h3> Name: {data.name} </h3>
      <h3> Price: {data.price} </h3>
      <Link to={`/products/${data.id}`}>more details </Link>
    </div>
  );
}
