import React, {FC} from "react";
import s from "./Company.module.scss";
import {faBriefcase} from "@fortawesome/free-solid-svg-icons/faBriefcase";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export type CompanyType = {
  id: string
  name: string,
  link: string,
  position: string,
  description: string,
  year: string,
  img?: string,
}

export const Company: FC<CompanyType> = ({img, name, position, description, year, link}) => {
  const finalDescription =description.split(/\n/).map(item => <p>{item}</p>);
  return <div className={s.wrapper}>
    <a href={link} className={img ? s.link : s.faBox}>
      {
        img ?
          <img src={img} alt={name} className={s.icon}/> :
          <FontAwesomeIcon icon={faBriefcase} size="lg" className={s.faIcon}/>
      }
    </a>

    <div className={s.box}>
      <div className={s.year}>{year}</div>
      <div className={s.position}>{position} <span className={s.school}>{name}</span></div>
      <div className={s.description}>{finalDescription}</div>
    </div>
  </div>;
};