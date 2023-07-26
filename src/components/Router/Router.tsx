import React from "react";
import {Routes, Route} from "react-router-dom";
import Contacts from "../Contacts/Contacts";
import MyProjects from "../MyProjects/MyProjects";
import Home from "../Home/Home";
import About from "../About/About";
import {Endpoints} from "../../config/endpoints";

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