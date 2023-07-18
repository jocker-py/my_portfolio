import React from "react";
import Title from "../../common/Title/Title";
import s from "./Education.module.scss";
import bntu from "../../../assets/school/bntu.svg";
import rs from "../../../assets/school/rs.svg";
import incubator from "../../../assets/school/incubator.svg";
import {School} from "./School/School";

export type SchoolType = {
  description: string,
  degree: string,
  school: string,
  img: string,
  year: string,
  link: string,
}

const Education = () => {
  const schools: Array<SchoolType> = [
    {
      description: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      degree: "React Frontend Developer",
      school: "iT-Incubator",
      img: incubator,
      year: "2023-2024",
      link: "https://it-incubator.io/",
    },
    {
      description: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      degree: "Frontend Developer",
      school: "RS School",
      img: rs,
      year: "2022-2023",
      link: "https://rs.school/",
    },
    {
      description: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      degree: "Bachelor degree of Energy",
      school: "Belarusian Nation Technical University",
      img: bntu,
      year: "2013-2018",
      link: "https://bntu.by/",
    },


  ];
  return (
    <div className={s.wrapper}>
      <Title>EDUCATION</Title>
      <div className={s.list}>
        {
          schools.map((props, id) => <School key={id} {...props}/>)
        }
      </div>
    </div>
  );
};


export default Education;