import React from "react";
import { Link, Route } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import { ProductItem } from "./ProductItem";
function Product() {
  return (
    <AppContext.Consumer>
      {({ data }) => {
        return (
          <>
            {data.map((item) => (
              <ProductItem data={item} key={item.id} />
            ))}
          </>
        );
      }}
    </AppContext.Consumer>
  );
}

export { Product };
