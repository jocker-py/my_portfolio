import React from "react";
import s from "./MyProjects.module.css";
import c from "../common/styles/Container.module.css";
import Project from "./Project/Project";

const MyProjects = () => {
  return (
    <section className={s.projects} id="projects">
      <div className={c.container}>
        <div className={s.wrapper}>
          <h2 className={c.title}>Мои работы</h2>
          <ul className={s.list}>
            <Project/>
            <Project/>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MyProjects;