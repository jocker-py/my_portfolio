import React from "react";
import s from './Header.module.css';
import c from '../common/styles/Container.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={c.container + ' ' + s.container}>
          <nav className={s.nav}>
            <a href={'#main'}>Главная</a>
            <a href={'#skills'}>Навыки</a>
            <a href={'#projects'}>Проекты</a>
            <a href={'#contacts'}>Контакты</a>
          </nav>
      </div>
    </header>

  );
};

export default Header;