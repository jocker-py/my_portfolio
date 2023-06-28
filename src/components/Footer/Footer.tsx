import React from "react";
import s from "./Footer.module.css";
import Container from "../common/Container/Conatiner";
import Title from "../common/Title/Title";


const Footer = () => {
  return (
    <footer className={s.footer}>
      <Container className={s.container}>
        <div className={s.wrapper}>
          <Title>Владислав Беляев</Title>
          <ul className={s.list}>
            <li className={s.item}>github</li>
            <li className={s.item}>telegram</li>
            <li className={s.item}>ico</li>
            <li className={s.item}>ico</li>
          </ul>
          <h5 className={s.copyright}>© 2019 Все права защищены</h5>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;