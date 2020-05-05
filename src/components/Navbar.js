import React, { Component } from 'react';
import {Link } from "react-router-dom";
import logo from "../logo.svg";
import {ButtonContainer, NavWrapper} from"./Button";
import styled from "styled-components";

;
export default class Navbar extends Component {

    render() {
        return  <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
            <Link to ="/">
                <img src={logo} alt="logo_image" className="navbar-brand"></img>
            </Link>
            
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                    <Link to="/" className="nav-link">products</Link>
                </li>
           </ul>
         <Link to="/cart" className="ml-auto nav-link">
           <ButtonContainer>
               <span className="mr-2">
              <i className="fa fa-cart-plus"/>
              </span>
               my cart
              
           </ButtonContainer>
           </Link>
        </NavWrapper>
          
        
    }
}



