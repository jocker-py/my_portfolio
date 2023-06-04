import React from "react";
import c from "../common/styles/Container.module.css";
import s from "./Footer.module.css";


const Footer = () => {
  return (
    <div className={c.container + ' ' + s.container}>
      <div className={s.footer}>
        <h2 className={c.title}>Владислав Беляев</h2>
        <ul className={s.list}>
          <li className={s.item}>github</li>
          <li className={s.item}>telegram</li>
          <li className={s.item}>ico</li>
          <li className={s.item}>ico</li>
        </ul>
        <h5 className={s.copyright}>© 2019 Все права защищены</h5>
      </div>
    </div>
  );
};

export default Footer;