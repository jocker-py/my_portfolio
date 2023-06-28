import React from "react";
import s from "./MyProjects.module.css";
import c from "../common/styles/Container.module.css";
import Project from "./Project/Project";

const MyProjects = () => {
  return (
    <section className={c.container + ' ' + s.container} id="projects">
      <div className={s.projects}>
         <h2 className={c.title}>Мои работы</h2>
        <ul className={s.list}>
          <Project/>
          <Project/>
        </ul>
      </div>
    </section>
  );
};

export default MyProjects;