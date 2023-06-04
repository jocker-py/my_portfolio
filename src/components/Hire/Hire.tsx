import React from "react";
import c from "../common/styles/Container.module.css";
import s from "./Hire.module.css";

const Hire = () => {
  return (
    <div className={c.container + ' ' + s.container}>
      <div className={s.hire}>
        <h2 className={c.title}>Рассматриваю вариант удаленной работы</h2>
        <button className={c.button}>Нанять меня</button>
      </div>
    </div>
  );
};

export default Hire;