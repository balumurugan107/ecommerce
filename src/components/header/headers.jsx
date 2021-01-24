import React from "react";
import {Link} from "react-router-dom";
import "./myheader.css";
import "./../../default.css";
import Logo from "./../../assets/b logo.jpg";

function Header(){
  return(
    <div className="header">
      <div className="warp">
      <div className="Logo">
        <Link to="/">
       <img src="https://logos-download.com/wp-content/uploads/2016/09/Myntra_logo.png" class="logo" />
       </Link>
       </div>
       <div className="callToAction">
         <ul>
           <li>
             <Link to="/registration">
               Register
             </Link>
           </li>
         </ul>
       </div>
       </div>
    </div>
  );
}

export default Header;
