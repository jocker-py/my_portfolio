import React from "react";
import s from './About.module.scss';
import HeadTitle from "../HeadTitle/HeadTitle";
import MySkills from "./MySkills/MySkills";
import PersonalInfo from "./PersonalInfo/PersonalInfo";

const About = () => {
  return (
    <section className={s.container}>
        <div className={s.wrapper}>
          <HeadTitle background={"Resume"} title={"About"} subtitle={"Me"}/>
          <PersonalInfo/>
          <MySkills/>
          <div>EXPERIENCE</div>
          <div>EDUCATION</div>
        </div>
    </section>
  );
};

export default About;

