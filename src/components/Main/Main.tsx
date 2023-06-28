import React from "react";
import s from "./Main.module.css";
import c from '../common/styles/Container.module.css';

const Main = () => {
  return (
      <section className={s.main} id="main">
        <div className={c.container}>
          <div className={s.wrapper}>
            <div className={s.description}>
              <span>Hi There</span>
              <h1 className={s.name}>I'm Vladislav Belyaev</h1>
              <p>A Frontend Developer</p>
            </div>
            <div className={s.photo}>Фото</div>
          </div>
        </div>

      </section>
  );
};

export default Main