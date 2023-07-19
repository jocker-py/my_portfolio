import React, {FC} from "react";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import s from "./ContactLink.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export type ContactLinkType = {
  link: string,
  icon: IconProp,
}

const ContactLink: FC<ContactLinkType> = ({link, icon}) => {
  return (
    <a href={link} className={s.link}>
      <FontAwesomeIcon icon={icon} size="lg"/>
    </a>
  );
};

export default ContactLink;

