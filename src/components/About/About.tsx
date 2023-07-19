import React from "react";
import s from './About.module.scss';
import HeadTitle from "../HeadTitle/HeadTitle";
import MySkills from "./MySkills/MySkills";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import Title from "../common/Title/Title";
import Education from "./Education/Education";

const About = () => {
  return (
    <section className={s.container}>
          <HeadTitle background={"Resume"} title={"About"} subtitle={"Me"}/>
          <PersonalInfo/>
          <hr/>
          <MySkills/>
          <hr/>
          <Title>EXPERIENCE</Title>
          <hr/>
          <Education/>
          <hr/>
          <Title>CodeWars</Title>
    </section>
  );
};

export default About;

