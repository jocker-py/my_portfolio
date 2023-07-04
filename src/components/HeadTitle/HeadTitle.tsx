import React, {FC} from "react";
import s from './HeadTitle.module.scss';

type HeadTitlePropsType = {
  background: string;
  title: string;
  subtitle: string;
}

const HeadTitle: FC<HeadTitlePropsType> = ({title, subtitle,background}) => {
  return <div className={s.container}>
    <div className={s.background}>{background}</div>
    <div className={s.title}>
      {title}
      <span className={s.subTitle}>{subtitle}</span>
    </div>
  </div>
}

export default HeadTitle