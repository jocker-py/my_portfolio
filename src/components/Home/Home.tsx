import React from "react";
import s from "./Home.module.scss";
import {NavLink} from "react-router-dom";
import {Endpoints} from "../../config/endpoints";

const Home = () => {
  return (
    <section className={s.container} id="home">
        <div className={s.block}/>
        <div className={s.wrapper}>
          <div className={s.description}>
            <h1 className={s.name}>I'm Vladislav Belyaev.<br/><span className={s.occupation}>Front End Developer</span></h1>
            <p className={s.details}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores, atque
              cumque dolor hic incidunt, labore maiores modi necessitatibus neque nobis odit optio quaerat quasi quia
              quos sit sunt voluptate!</p>
            <NavLink to={Endpoints.About} className={s.button}>More about me</NavLink>
          </div>
          <div className={s.photo}/>
        </div>
    </section>
  );
};

export default Home;