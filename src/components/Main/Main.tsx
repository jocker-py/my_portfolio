import React from "react";
import c from "../common/styles/Container.module.css";
import s from "./Main.module.css";

const Main = () => {
  return (
      <section className={c.container + ' ' + s.container} id="main">
        <div className={s.main}>
          <div className={s.description}>
            <span>Hi There</span>
            <h1 className={s.name}>I'm Vladislav Belyaev</h1>
            <p>A Frontend Developer</p>
          </div>
          <div className={s.photo}>Фото</div>
        </div>
      </section>
  );
};

export default Main