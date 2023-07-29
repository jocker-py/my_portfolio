import React from "react";
import s from "./Education.module.scss";
import bntu from "../../../assets/school/bntu.svg";
import rs from "../../../assets/school/rs.svg";
import incubator from "../../../assets/school/incubator.svg";
import {v1} from "uuid";
import {Company, CompanyType} from "../../../components/Company/Company";
import Title from "../../../components/Title/Title";


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
      description:
        `During the course, I studied the main web development technologies, including HTML, CSS, and JavaScript.\nI also gained experience working with the React framework and the TypeScript language.\nI used build tools such as Webpack and package managers such as NPM and Yarn to manage dependencies.\nI also gained experience working with Git and version control systems.\n 
        "In addition, I learned tools for code checking and formatting, such as ESLint and Prettier, and the Jest framework for writing and running unit tests.\nI mastered the Sass preprocessor and learned the basics of web design and creating responsive layouts.\n
        "As a result of this course, I acquired the skills necessary for developing modern web applications and creating high-quality code that meets modern standards and requirements. I also learned to work in a team and effectively manage changes in source code.`,
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
      <div className={s.list}>
        {
          schools.map((school) => <Company key={school.id} {...school}/>)
        }
      </div>
    </article>
  );
};


export default Education;