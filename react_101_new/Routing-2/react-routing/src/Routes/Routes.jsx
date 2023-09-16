import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";
import { Product } from "./Products";
import { ProductPage } from "./ProductPage";

function Routes() {
  return (
    <>
      <Route path="/" render={() => <Navbar />} />
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/about" render={() => <About />} />
        <Route path="/contact" render={() => <Contact />} />
        <Route
          path="/products/:id"
          render={(props) => <ProductPage {...props} />}
        />
        <Route path="/products" render={() => <Product />} />
        <Route>
          <div>Error 404 </div>
          <Link to="/">GO BACK HOME</Link>
        </Route>
      </Switch>
    </>
  );
}

export { Routes };
