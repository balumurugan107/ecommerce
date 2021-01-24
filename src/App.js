import React from "react";
import {BrowserRouter,Route,Switch} from "react-router-dom";

import MainLayout from "./Layouts/mainlayout.js";
import HomepageLayout from "./Layouts/homepagelayout.js"

import Header from "./components/header/headers.jsx";
import Homepage from "./pages/homepage/homepages.jsx";
import Registration from "./pages/registration/registrations.jsx";
import "./default.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
          <Route exact path="/" render={()=>(
              <MainLayout>
                <Homepage />
              </MainLayout>
            )} />
          <Route path="/registration" render={()=>(
              <MainLayout>
                <Registration />
              </MainLayout>
            )}/>
          </Switch>
          </BrowserRouter>
    </div>
  );
}

export default App;
