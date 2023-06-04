import React from "react";
import c from "../common/styles/Container.module.css";
import s from './Header.module.css';


const Header = () => {
  return (
    <div className={c.container + ' ' + s.container}>
      <header className={s.header}>
        <nav className={s.nav}>
          <a href={'#main'}>Главная</a>
          <a href={'#skills'}>Навыки</a>
          <a href={'#projects'}>Проекты</a>
          <a href={'#contacts'}>Контакты</a>
        </nav>
      </header>
    </div>
  );
};

export default Header;