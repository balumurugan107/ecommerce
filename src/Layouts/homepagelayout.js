import React from "react";
import Header from "./../components/header/headers.jsx";
import Footer from "./../components/footer/footer.jsx";
function HomepageLayout(props){
  return(
      <div className="fullHeight">
        <Header />
          {props.children}
          <Footer />
      </div>
  );
}
export default HomepageLayout;
