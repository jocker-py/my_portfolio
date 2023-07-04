import React from "react";
import s from "./MyProjects.module.scss";
import HeadTitle from "../HeadTitle/HeadTitle";

const MyProjects = () => {
  return (
    <section className={s.container}>
      <div className={s.wrapper}>
        <HeadTitle background={"Works"} title={"My"} subtitle={'Portfolio'}/>
      </div>
    </section>
  );
};

export default MyProjects;