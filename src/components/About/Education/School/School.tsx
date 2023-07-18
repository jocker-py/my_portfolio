import React, {FC} from "react";
import s from "./School.module.scss";
import {SchoolType} from "../Education";

export const School: FC<SchoolType> = ({img, school, degree, description, year, link}) => {
  return <div className={s.wrapper}>
    <div className={s.image}>
      <a href={link} className={s.link}>
        <img src={img} alt={school} className={s.icon}/>
      </a>
    </div>
    <div>
      <div className={s.year}>{year}</div>
      <div className={s.degree}>{degree} <span className={s.school}>{school}</span></div>
      <div className={s.description}>{description}</div>
    </div>
  </div>;
};