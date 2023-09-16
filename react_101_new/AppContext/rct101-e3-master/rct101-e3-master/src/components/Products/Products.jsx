import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/products").then(({data}) => {
      setProducts(data);
    })
  }, [])
  console.log(products);
  return <div>
    <h1>Products</h1>
    <div style={{display: "flex", gap: "10px"}}>
      {products.map((prod) => (
        <Product key={prod.id} {...prod} />
      ))}
    </div>
  </div>;
};

export default Products;
