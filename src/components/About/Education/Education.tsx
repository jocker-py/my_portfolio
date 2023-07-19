import React from "react";
import Title from "../../common/Title/Title";
import s from "./Education.module.scss";
import bntu from "../../../assets/school/bntu.svg";
import rs from "../../../assets/school/rs.svg";
import incubator from "../../../assets/school/incubator.svg";
import {Company, CompanyType} from "../../common/Company/Company";
import List from "../../common/List/List";
import {v1} from "uuid";

const Education = () => {
  const schools: Array<CompanyType> = [
    {
      id: v1(),
      description: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      position: "React Frontend Developer",
      name: "iT-Incubator",
      img: incubator,
      year: "2023-2024",
      link: "https://it-incubator.io/",
    },
    {
      id: v1(),
      description: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      position: "Frontend Developer",
      name: "RS School",
      img: rs,
      year: "2022-2023",
      link: "https://rs.school/",
    },
    {
      id: v1(),
      description: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      position: "Bachelor degree of Energy",
      name: "Belarusian Nation Technical University",
      img: bntu,
      year: "2013-2018",
      link: "https://bntu.by/",
    },


  ];
  return (
    <article className={s.wrapper}>
      <Title>EDUCATION</Title>
      <List items={schools} renderItem={(school) => <Company {...school}/>} className={s.list}/>
    </article>
  );
};


export default Education;