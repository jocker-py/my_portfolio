import React from "react";
import s from "./Contacts.module.css";
import Container from "../common/Container/Conatiner";
import Title from "../common/Title/Title";
import Button from "../common/Button/Button";

const Contacts = () => {
  return (
    <section className={s.contacts}>
      <Container>
        <div className={s.wrapper}>
          <Title>Контакты</Title>
          <form action="#" className={s.form}>
            <input type="text" className={s.name} placeholder="Введите Ваше Имя"/>
            <input type="phone" className={s.phone} placeholder="Введите Ваш номер телефона"/>
            <textarea className={s.textarea} rows={8} placeholder="Введите сообщение"/>
          </form>
          <Button>Отправить</Button>
        </div>
      </Container>
    </section>
  );
};


export default Contacts;