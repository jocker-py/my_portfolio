import React from 'react';
import s from './App.module.scss';
import Router from "./components/Router/Router";
import Header from "./components/Header/Header";
import {BrowserRouter} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className={s.app}>
        <Header/>
        <Router/>
      </div>
    </BrowserRouter>
  );
}

export default App;
