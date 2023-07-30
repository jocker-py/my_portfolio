import React from "react";
import s from "./MyProjects.module.scss";
import portfolio from "../../assets/projects/Portfolio.png";
import gallery from "../../assets/projects/Gallery.png";
import memoryGame from "../../assets/projects/MemoryGame.png";
import shelter from "../../assets/projects/Shelter.png";
import keyboard from "../../assets/projects/Keyboard.png";
import onlineStore from "../../assets/projects/OnlineStore.png";
import skyLang from "../../assets/projects/SkyLang.png";
import taskManager from "../../assets/projects/TaskManager.png";
import Project from "./Project/Project";
import Page from "../../components/Page/Page";


const MyProjects = () => {
  const projects = [
    {
      img: portfolio,
      link: "https://jocker-py.github.io/projects-stage0/portfolio/",
      title: "Portfolio",
    },
    {
      img: gallery,
      link: "https://jocker-py.github.io/projects-stage0/image-galery/",
      title: "Photo Gallery",
    }, {
      img: memoryGame,
      link: "https://jocker-py.github.io/projects-stage0/memory-game/",
      title: "Memory Game",
    }, {
      img: shelter,
      link: "https://jocker-py.github.io/Shelter/main/",
      title: "Shelter",
    }, {
      img: keyboard,
      link: "https://jocker-py.github.io/Virtual-keyboard/",
      title: "Virtual Keyboard",
    }, {
      img: onlineStore,
      link: "https://jocker-py-online-store.netlify.app/",
      title: "Online Store",
    }, {
      img: skyLang,
      link: "https://rslang-team24-saintsanta-skylang.netlify.app/",
      title: "Sky Lang",
    }, {
      img: taskManager,
      link: "https://project-management-fe1.onrender.com/",
      title: "Task Manager",
    },
  ];


  return (
    <Page background={"Works"} title={"My"} subtitle={"Portfolio"}>
      <div className={s.wrapper}>
        {
          projects.map((project, idx) => <Project key={idx} {...project}/>)
        }
      </div>
    </Page>
  );
};

export default MyProjects;