import React from "react";
import Header from "./components/header/headers.jsx";
import Homepage from "./pages/homepage/homepages.jsx";
import "./default.css";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Homepage />
        </div>
    </div>
  );
}

export default App;
