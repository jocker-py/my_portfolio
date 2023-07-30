import React from "react";
import Router from "./components/Router/Router";
import Header from "./components/Header/Header";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Router/>
    </BrowserRouter>
  );
}

export default App;
