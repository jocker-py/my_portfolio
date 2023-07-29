import {IconProp} from "@fortawesome/fontawesome-svg-core";
import React, {FC} from "react";
import s from "./NavIconLink.module.scss";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type navIconLinkPropsType = {
  icon: IconProp
  title: string
  to: string
}

export const NavIconLink: FC<navIconLinkPropsType> = ({icon, title, to}) => {
  const navLinkClass = ({isActive}: { isActive: boolean }) => {
    return isActive ? s.link + " " + s.active : s.link;
  };
  return <NavLink to={to} className={navLinkClass}>
    <FontAwesomeIcon icon={icon} size="lg" className={s.icon}/>
    <h2 className={s.title}>{title}</h2>
  </NavLink>;
};