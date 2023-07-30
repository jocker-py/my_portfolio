import React, {FC} from "react";
import s from "./Skill.module.scss";

export type SkillType = {
  id: string
  icon: string;
  title: string;
}

const Skill: FC<SkillType> = ({icon, title}) => {
  return <li className={s.skill}>
    <div className={s.imgContainer}>
      <img src={icon} className={s.img} alt={title}/>
    </div>
    <h4 className={s.title}>{title}</h4>
  </li>;
};
export default Skill;