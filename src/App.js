import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import classes from "./App.module.css";
import Navbar from "./components/navbar/navbar";
import Products from "./components/products/products";
import Cart from "./components/cart/cart";

function App() {
  return (
    <Router>
      <div className={classes.App}>
        <Navbar />
        <main className={classes.MainContent}>
          <Switch>
            <Route exact path="/" component={Products} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
