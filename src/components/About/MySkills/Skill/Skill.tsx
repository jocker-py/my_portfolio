import React from "react";
import s from './Skill.module.scss';

const Skill = () => {
  return (
    <li className={s.skill}>
      <div className={s.logo}>logo</div>
      <h4 className={s.title}>React</h4>
      <p className={s.description}>Подробное описание навыка</p>
    </li>
  );
};

export default Skill;