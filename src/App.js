import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Default from './components/Default';
import Cart from './components/Cart/Cart';
import {Switch, Link, Route} from "react-router-dom";
import Modal from "./components/Modal";


function App() {
  return (
   <React.Fragment>
     <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={ProductList} ></Route>
        <Route path="/details" component={Details}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route component={Default}></Route>
      </Switch>
      <Modal/>

   </React.Fragment>
  );
}

export default App;
