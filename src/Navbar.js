import React from 'react';
import {  Link } from "react-router-dom";
const Navbar= () =>{
  return (
  <div className='navigation'>
     <nav>
        <h3>User <span>Records</span></h3>
        <ul>
            <li><a href="/">Home</a></li>
        </ul>
     </nav>
  </div>
  );
}
export default Navbar;