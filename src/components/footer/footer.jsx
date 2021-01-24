import React from "react";
import "./myfooter.scss";

function Footer(props){
  var d=new Date();
  const year=d.getFullYear();
  return(
    <footer className="footer">
      <div className="warp">
        @Myntra{year}
      </div>
    </footer>
  );
}
export default Footer;
