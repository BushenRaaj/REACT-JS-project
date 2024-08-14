import React from "react";
import ReactDOM from "react-dom";
import "./header.css";

function Header(){
    return(
      <header>
      <nav>
        <ul className="navlink">
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </header>

    )
  }
  export default Header;