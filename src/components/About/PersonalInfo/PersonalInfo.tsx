import React from "react";
import s from "./PersonalInfo.module.scss";
import Title from "../../common/Title/Title";

const PersonalInfo = () => {
  return (
    <article className={s.wrapper}>
      <Title>Personal Info</Title>
      <ul className={s.info}>
        <li className={s.item}>First Name: <span className={s.details}>Vladislav</span></li>
        <li className={s.item}>Last Name: <span className={s.details}>Belyaev</span></li>
        <li className={s.item}>Age: <span className={s.details}>28 Years</span></li>
        <li className={s.item}>Nationality: <span className={s.details}>Belarus</span></li>
        <li className={s.item}>Freelance: <span className={s.details}>Available</span></li>
        <li className={s.item}>Address: <span className={s.details}>Astravec, Belarus</span></li>
        <li className={s.item}>Phone: <span className={s.details}>+375336286538</span></li>
        <li className={s.item}>Languages: <span className={s.details}>Russian, English</span></li>
        <li className={s.item}>Email: <span className={s.details}>buladzislau@gmail.com</span></li>

      </ul>
      <button className={s.file}>
        <a href={"../../../assets/Belyaev_Front_End.pdf"} download>download CV</a>
      </button>
    </article>
  );
};

export default PersonalInfo;