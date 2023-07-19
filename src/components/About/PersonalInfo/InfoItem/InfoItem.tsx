import React, {FC} from "react";
import s from "../PersonalInfo.module.scss";

export type InfoItemType = {
  id: string
  title: string,
  subtitle: string
}

const InfoItem: FC<InfoItemType> = ({title, subtitle}) => {
  return (
    <li className={s.item}>{title}: <span
      className={s.details}>{subtitle}</span>
    </li>
)
};

export default InfoItem;