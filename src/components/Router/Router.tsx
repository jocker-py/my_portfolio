import React from "react";
import {Routes, Route} from "react-router-dom";
import Contacts from "../../features/Contacts/Contacts";
import MyProjects from "../../features/MyProjects/MyProjects";
import About from "../../features/About/About";
import Home from "../../features/Home/Home";

export enum Endpoints {
  Contact= '/contact',
  Portfolio= '/portfolio',
  About= '/about',
  Home= '/my_portfolio',
}

const Router = () => {
  return (
      <Routes>
        <Route path={Endpoints.Contact} element={<Contacts/>}/>
        <Route path={Endpoints.Portfolio} element={<MyProjects/>}/>
        <Route path={Endpoints.About} element={<About/>}/>
        <Route path={Endpoints.Home} element={<Home/>}/>
        {/*<Route path={"/*"} element={<Error404/>}/>*/}
      </Routes>


  );
};

export default Router;