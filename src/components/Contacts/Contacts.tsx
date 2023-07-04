import React from "react";
import s from "./Contacts.module.scss";
import Button from "../common/Button/Button";
import HeadTitle from "../HeadTitle/HeadTitle";

const Contacts = () => {
  return (
    <section className={s.container}>
      <div className={s.wrapper}>
        <HeadTitle background={"Contacts"} title={"Get In"} subtitle={"Touch"}/>
          <form action="#" className={s.form}>
            <input type="text" className={s.name} placeholder="Введите Ваше Имя"/>
            <input type="phone" className={s.phone} placeholder="Введите Ваш номер телефона"/>
            <textarea className={s.textarea} rows={8} placeholder="Введите сообщение"/>
          </form>
          <Button>Отправить</Button>
      </div>
    </section>
  );
};


export default Contacts;
