import React from "react";
import s from "./About.module.scss";
import MySkills from "./MySkills/MySkills";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Page from "../../components/Page/Page";

const About = () => {
  return (
    <Page background={"Resume"} title={"About"} subtitle={"Me"}>
      <div className={s.wrapper}>
        <PersonalInfo/>
        <hr/>
        <MySkills/>
        <hr/>
        <Experience/>
        <hr/>
        <Education/>
        <hr/>
      </div>
    </Page>

  );
};

export default About;

