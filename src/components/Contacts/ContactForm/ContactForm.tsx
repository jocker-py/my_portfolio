import React from "react";
import s from "./ContactForm.module.scss";
import Button from "../../common/Button/Button";
import {faTelegram} from "@fortawesome/free-brands-svg-icons/faTelegram";

const ContactForm = () => {
  return (
    <form action="#" className={s.form}>
      <div className={s.wrapper}>
        <input type="text" className={s.name} placeholder="Your name"/>
        <input type="phone" className={s.phone} placeholder="Your phone"/>
      </div>
      <input type="subject" className={s.subject} placeholder="Your subject"/>
      <textarea className={s.textarea} rows={8} placeholder="Your message"/>
      <Button text={'Send Message'} icon={faTelegram}/>
    </form>
  );
};

export default ContactForm;
