import React from "react";
import s from "./Home.module.scss";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/Button/Button";
import {Endpoints} from "../../components/Router/Router";
import {NavLink} from "react-router-dom";
import Page from "../../components/Page/Page";

const Home = () => {
  return (
    <Page>
      <div className={s.block}/>
      <div className={s.wrapper}>
        <article className={s.description}>
          <h1 className={s.name}>I'm Vladislav Belyaev<br/><span className={s.occupation}>Front End Developer</span>
          </h1>
          <p className={s.details}>
            Welcome to my portfolio! <br/>
            I specialize in creating user-friendly and visually appealing interfaces for web applications and
            websites.<br/>
            Here you can learn more about my work and skills.</p>

          <NavLink to={Endpoints.About}>
            <Button text={"More about me"} icon={faAngleRight}/>
          </NavLink>
        </article>
        <div className={s.photo}/>
      </div>
    </Page>
  );

};

export default Home;