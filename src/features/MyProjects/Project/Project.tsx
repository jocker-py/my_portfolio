import React, {FC} from "react";
import s from "./Project.module.scss";

type ProjectPropsType = {
  img: string
  link: string
  title: string
}

const Project: FC<ProjectPropsType> = ({img, link, title}) => {
  return (
    <article className={s.container}>
      <a href={link} className={s.link}>
        <div className={s.img} style={{backgroundImage: `url(${img})`}}/>
        <div className={s.content}>
          <h3 className={s.title}>{title}</h3>
        </div>
      </a>
    </article>
  );
};

export default Project;