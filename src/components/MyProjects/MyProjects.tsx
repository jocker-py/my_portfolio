import React from "react";
import s from "./MyProjects.module.css";
import Project from "./Project/Project";
import Container from "../common/Container/Conatiner";
import Title from "../common/Title/Title";

const MyProjects = () => {
  return (
    <section className={s.projects} id="projects">
      <Container>
        <div className={s.wrapper}>
          <Title>Мои работы</Title>
          <ul className={s.list}>
            <Project/>
            <Project/>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default MyProjects;