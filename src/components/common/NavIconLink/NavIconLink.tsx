import {IconProp} from "@fortawesome/fontawesome-svg-core";
import React, {FC} from "react";
import s from "../../Header/Header.module.scss";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type navIconLinkPropsType = {
  icon: IconProp
  title: string
  to: string
}

export const NavIconLink: FC<navIconLinkPropsType> = ({icon, title, to}) => {
  const navLinkClass = ({isActive}: { isActive: boolean }) => {
    return isActive ? s.navLink + " " + s.active : s.navLink;
  };
  return <NavLink to={to} className={navLinkClass}>
    <div className={s.text}>{title}</div>
    <FontAwesomeIcon icon={icon} size="lg" style={{position: "relative", zIndex: "3"}}/>
  </NavLink>;
};