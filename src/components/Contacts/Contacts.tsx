import React from "react";
import s from "./Contacts.module.css";
import c from "../common/styles/Container.module.css";

const Contacts = () => {
  return (
    <section className={c.container + " " + s.container} id="contacts">
      <div className={s.contacts}>
        <h2 className={c.title}>Контакты</h2>
        <form action="#" className={s.form}>
          <input type="text" className={s.name} placeholder="Введите Ваше Имя"/>
          <input type="phone" className={s.phone} placeholder="Введите Ваш номер телефона"/>
          <textarea  className={s.textarea} rows={8} placeholder="Введите сообщение" />
        </form>
        <button className={c.button}>Оправить</button>
      </div>

    </section>
  );
};

export default Contacts;