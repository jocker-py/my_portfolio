import React from "react";
import s from './Project.module.css';
import Button from "../../common/Button/Button";

const Project = () => {
  return (
    <div className={s.project}>
      <div className={s.photo}>
        Картинка
        <Button className={s.button}>Смотреть</Button>
      </div>
      <div className={s.info}>
        <h4 className={s.title}>Название проекта</h4>
        <p className={s.description}>Краткое описание</p>
      </div>
    </div>
  );
};

export default Project;