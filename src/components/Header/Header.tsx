import React from "react";
import s from "./Header.module.css";
import Container from "../common/Container/Conatiner";



const Header = () => {
  return (
    <header className={s.header}>
        <Container className={s.container}>
          <nav className={s.nav}>
            <a href={"#main"}>Главная</a>
            <a href={"#skills"}>Навыки</a>
            <a href={"#projects"}>Проекты</a>
            <a href={"#contacts"}>Контакты</a>
          </nav>
        </Container>
    </header>

  );
};

export default Header;