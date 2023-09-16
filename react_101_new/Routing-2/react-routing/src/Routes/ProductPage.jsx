import React from "react";
import { AppContext } from "../Context/AppContext";

class ProductPage extends React.Component {
  render() {
    const { id } = this.props.match.params;
    const { data } = this.context;
    const item = data.find((item) => item.id === Number(id));
    return (
      <>
        Product Page
        <h3> Name: {item.name} </h3>
        <h3> Price: {item.price} </h3>
        <h3> Description: {item.description} </h3>
      </>
    );
  }
}

ProductPage.contextType = AppContext;

export { ProductPage };
