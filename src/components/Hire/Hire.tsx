import React from "react";
import s from "./Hire.module.css";
import Container from "../common/Container/Conatiner";
import Title from "../common/Title/Title";
import Button from "../common/Button/Button";

const Hire = () => {
  return (
    <section className={s.hire}>
      <Container>
        <div className={s.wrapper}>
          <Title>Рассматриваю вариант удаленной работы</Title>
          <Button>Нанять меня</Button>
        </div>
      </Container>
    </section>
  );
};

export default Hire;