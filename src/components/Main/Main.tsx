import React from "react";
import s from "./Main.module.css";
import Container from "../common/Container/Conatiner";

const Main = () => {
  return (
      <section className={s.main} id="main">
        <Container>
          <div className={s.wrapper}>
            <div className={s.description}>
              <span>Hi There</span>
              <h1 className={s.name}>I'm Vladislav Belyaev</h1>
              <p>A Frontend Developer</p>
            </div>
            <div className={s.photo}>Фото</div>
          </div>
        </Container>
      </section>
  );
};

export default Main