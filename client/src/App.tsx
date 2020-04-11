import React, { useState } from "react";
import "./styles/App.css";

import {
  BrowserRouter,
  Route,
  Link,
  Switch
} from "react-router-dom";

import { BookPage } from './components/BookPage/BookPage'
import Navbar from './components/Navbar/Navbar'
import { ShoppingCart } from './components/ShoppingCart/ShoppingCart';
import SearchResults from './components/SearchResults/SearchResults';

// <Navbar />
function App() {
  return (
      <React.Fragment>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={() => <p>Welcome!</p>} />
          <Route path="/search" component={SearchResults} />
          <Route path="/book/:asin" component={BookPage} />
          <Route path="/cart" exact component={ShoppingCart} />
        </Switch>
      </React.Fragment>
  );
}

export default App;