import React, {FC} from "react";
import s from "./Skill.module.scss";

type SkillPropsType = {
  icon: string;
  title: string;
}

const Skill: FC<SkillPropsType> = ({icon, title}) => {
  return (
    <li className={s.skill}>
      <div><img src={icon} className={s.icon} alt={title}/></div>
      <h4 className={s.title}>{title}</h4>
    </li>
  );
};

export default Skill;