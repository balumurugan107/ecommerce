import React from "react";
import Header from "./../components/header/headers.jsx";
import Footer from "./../components/footer/footer.jsx";
function MainLayout(props){
  return(
      <div>
        <Header />
        <div className="main">
          {props.children}
        </div>
        <Footer />
      </div>
  );
}
export default MainLayout;
