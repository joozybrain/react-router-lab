import React from "react";
import { Link } from "react-router-dom";


const NavLinks = () => (
  
  <div>
    <Link to="/">Home Page </Link>
    <Link to="/tacos">Tacos Feed </Link>
    <Link to="/twitter">Twitter Feed </Link>
    
  </div>
  
);

export default NavLinks;
