import React from "react";
import Skill from "./Skill/Skill";
import s from './MySkills.module.css';
import c from '../common/styles/Container.module.css';

const MySkills = () => {
  return (
    <div className={c.container + ' ' + s.container} id="skills">
        <div className={s.skills}>
          <h2 className={c.title}>Мои скиллы</h2>
          <ul className={s.list}>
            <Skill/>
            <Skill/>
            <Skill/>
          </ul>
        </div>
    </div>
  );
};

export default MySkills;