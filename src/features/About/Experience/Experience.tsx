import React from "react";
import s from "./Experience.module.scss";
import {v1} from "uuid";
import Title from "../../../components/Title/Title";
import {Company, CompanyType} from "../../../components/Company/Company";


const Experience = () => {
  const companies: Array<CompanyType> = [
    {
      id: v1(),
      img: "",
      name: "Belarusian nuclear power plant",
      link: "https://belaes.by/en/",
      position: "Turbine equipment operator of 7 degree",
      description: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      year: "2018-2022",
    },
    {
      id: v1(),
      img: "",
      name: "Belarusian nuclear power plant",
      link: "https://belaes.by/en/",
      position: "Turbine equipment operator of 8 degree",
      description: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      year: "2022-present",
    },
  ];
  return (
    <article className={s.wrapper}>
      <Title>EXPERIENCE</Title>
      <div className={s.list}>
        {
          companies.map((company) => <Company key={company.id}{...company}/>)
        }
      </div>
    </article>
  );
};

export default Experience;