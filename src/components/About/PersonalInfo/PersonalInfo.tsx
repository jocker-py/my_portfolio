import React from "react";
import s from "./PersonalInfo.module.scss";
import Title from "../../common/Title/Title";

import {saveAs} from "file-saver";
import Button from "../../common/Button/Button";

function handleDownloadPDF() {
  const pdfPath = "https://export-download.canva.com/AW9kY/DAFjE6AW9kY/129/0-1272663795381854700.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20230717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230717T170012Z&X-Amz-Expires=69854&X-Amz-Signature=9a1ed50c9e867b7b113f06fa17c2a99686690ce3b4cfda92089f51cdf90e6683&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Black%2520White%2520Minimalist%2520CV%2520Resume.pdf&response-expires=Tue%2C%2018%20Jul%202023%2012%3A24%3A26%20GMT";
  const pdfFileName = "Front_End_Belyaev.pdf";
  saveAs(pdfPath, pdfFileName);

}

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
      <Button className={s.file} onClick={handleDownloadPDF}>
        Download CV
      </Button>
    </article>
  );
};

export default PersonalInfo;