import React from "react";
import c from "../common/styles/Container.module.css";
import s from "./Hire.module.css";

const Hire = () => {
  return (
    <section className={s.hire}>
        <div className={c.container}>
          <div className={s.wrapper}>
            <h2 className={c.title}>Рассматриваю вариант удаленной работы</h2>
            <button className={c.button}>Нанять меня</button>
          </div>
        </div>
    </section>
  );
};

export default Hire;