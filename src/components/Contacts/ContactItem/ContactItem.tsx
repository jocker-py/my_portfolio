import {IconProp} from "@fortawesome/fontawesome-svg-core";
import React, {FC} from "react";
import s from "./ContactItem.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export type ContactItemType = {
  id: string,
  icon: IconProp,
  title: string,
  subtitle: string,
  link?: string,
}

export const ContactItem: FC<ContactItemType> = ({icon, title, subtitle, link}) => {
  return <div className={s.item}>
    <div className={s.image}>
      <FontAwesomeIcon icon={icon} size="lg" className={s.icon}/>
    </div>
    <div className={s.description}>
      <div className={s.title}>{title}</div>
      <div className={s.subtitle}>{subtitle}</div>
    </div>
  </div>;
};
