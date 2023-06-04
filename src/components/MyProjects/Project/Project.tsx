import React from "react";
import s from './Project.module.css';
import c from '../../common/styles/Container.module.css';

const Project = () => {
  return (
    <div className={s.project}>
      <div className={s.photo}>
        Картинка
        <button className={c.button + ' ' + s.button}>Смотреть</button>
      </div>
      <div className={s.info}>
        <h4 className={s.title}>Название проекта</h4>
        <p className={s.description}>Краткое описание</p>
      </div>
    </div>
  );
};

export default Project;