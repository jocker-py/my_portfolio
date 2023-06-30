import React from "react";
import {Routes, Route} from "react-router-dom";
import Footer from "../Footer/Footer";
import Contacts from "../Contacts/Contacts";
import Hire from "../Hire/Hire";
import MyProjects from "../MyProjects/MyProjects";
import MySkills from "../MySkills/MySkills";
import Home from "../Home/Home";
import {Endpoints} from "../../config/endpoints";

const Router = () => {
  return (
      <Routes>
        <Route path={Endpoints.Society} element={<Footer/>}/>
        <Route path={Endpoints.Contact} element={<Contacts/>}/>
        <Route path={Endpoints.Hire} element={<Hire/>}/>
        <Route path={Endpoints.Portfolio} element={<MyProjects/>}/>
        <Route path={Endpoints.About} element={<MySkills/>}/>
        <Route path={Endpoints.Home} element={<Home/>}/>
        {/*<Route path={"/*"} element={<Error404/>}/>*/}
      </Routes>


  );
};

export default Router;