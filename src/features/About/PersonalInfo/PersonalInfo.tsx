import React from "react";
import s from "./PersonalInfo.module.scss";
import {saveAs} from "file-saver";
import {faDownload} from "@fortawesome/free-solid-svg-icons/faDownload";
import {v1} from "uuid";
import Title from "../../../components/Title/Title";
import Button from "../../../components/Button/Button";

function handleDownloadPDF() {
  const pdfPath = "https://drive.google.com/file/d/10wjV7on2mj47DrWU9-IOfvhpJg3znvyN/view?usp=sharing";
  const pdfFileName = "Front_End_Belyaev.pdf";
  saveAs(pdfPath, pdfFileName);
}

type InfoItemType = {
  id: string;
  title: string;
  subtitle: string;
}


const PersonalInfo = () => {
  const infos: Array<InfoItemType> = [
    {id: v1(), title: "First Name", subtitle: "Vladislav"},
    {id: v1(), title: "Last Name", subtitle: "Belyaev"},
    {id: v1(), title: "Age", subtitle: "28 Years"},
    {id: v1(), title: "Nationality", subtitle: "Belarus"},
    {id: v1(), title: "Freelance", subtitle: "Available"},
    {id: v1(), title: "Languages", subtitle: "Russian, English"},
    {id: v1(), title: "Phone", subtitle: "+375 33 628-65-38"},
    {id: v1(), title: "Email", subtitle: "buladzislau@gmail.com"},
  ];
  return (
    <article className={s.container}>
      <Title className={s.title}>Personal Info</Title>
      <div className={s.wrapper}>
        <div className={s.infoList}>
          {
            infos.map(({title, subtitle, id}) => (
              <li key={id} className={s.item}>{title}: <span
                className={s.details}>{subtitle}</span>
              </li>))
          }
        </div>
        <div className={s.links}>
          <Button text={"Download CV"} icon={faDownload} onClick={handleDownloadPDF}/>
          <a href="https://www.codewars.com/users/jocker-py"><img
            className={s.codewarsImg}
            height={40}
            src="https://www.codewars.com/users/jocker-py/badges/large" alt="codewars"/></a>
        </div>
      </div>
    </article>
  );
};

export default PersonalInfo;