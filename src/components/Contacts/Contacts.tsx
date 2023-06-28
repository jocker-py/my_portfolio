import React from "react";
import s from "./Contacts.module.css";
import c from "../common/styles/Container.module.css";

const Contacts = () => {
  return (
    <section className={s.contacts}>
      <div className={c.container}>
        <div className={s.wrapper}>
          <h2 className={c.title}>Контакты</h2>
          <form action="#" className={s.form}>
            <input type="text" className={s.name} placeholder="Введите Ваше Имя"/>
            <input type="phone" className={s.phone} placeholder="Введите Ваш номер телефона"/>
            <textarea  className={s.textarea} rows={8} placeholder="Введите сообщение" />
          </form>
          <button className={c.button}>Оправить</button>
        </div>
      </div>
    </section>
  );
};

export default Contacts;