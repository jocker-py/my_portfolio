import React from "react";
import s from "./MySkills.module.scss";
import Skill from "./Skill/Skill";
import Title from "../../common/Title/Title";
import react from "../../../assets/techs/react.svg";
import ts from "../../../assets/techs/ts.svg";
import redux from "../../../assets/techs/redux.svg";
import html from "../../../assets/techs/html.svg";
import css from "../../../assets/techs/css.svg";
import sass from "../../../assets/techs/sass.svg";
import figma from "../../../assets/techs/figma.svg";
import markdown from "../../../assets/techs/markdown.svg";
import node from "../../../assets/techs/node.svg";
import material from "../../../assets/techs/material.svg";
import webpack from "../../../assets/techs/webpack.svg";
import eslint from "../../../assets/techs/eslint.svg";
import jest from "../../../assets/techs/jest.svg";
import storybook from "../../../assets/techs/storybook.svg";
import github from "../../../assets/techs/github.svg";
import git from "../../../assets/techs/git.svg";
import js from "../../../assets/techs/js.svg";
import heroku from "../../../assets/techs/heroku.svg";
import vscode from "../../../assets/techs/vscode.svg";
import webstorm from "../../../assets/techs/webstorm.svg";
import npm from "../../../assets/techs/npm.svg";
import yarn from "../../../assets/techs/yarn.svg";
import prettier from "../../../assets/techs/prettier.png";
import axios from "../../../assets/techs/axios.svg";


const MySkills = () => {
  const tech = [
    {title: "React", icon: react},
    {title: "JavaScript", icon: js},
    {title: "TypeScript", icon: ts},
    {title: "Redux", icon: redux},
    {title: "GitHub", icon: github},
    {title: "HTML", icon: html},
    {title: "CSS", icon: css},
    {title: "SCSS/SASS", icon: sass},
    {title: "Figma", icon: figma},
    {title: "Heroku", icon: heroku},
    {title: "Axios", icon: axios},
    {title: "Node.JS", icon: node},
    {title: "Git", icon: git},
    {title: "Storybook", icon: storybook},
    {title: "Jest", icon: jest},
    {title: "MaterialUI", icon: material},
    {title: "Webpack", icon: webpack},
    {title: "EsLint", icon: eslint},
    {title: "Prettier", icon: prettier},
    {title: "MarkDown", icon: markdown},
    {title: "VSCode", icon: vscode},
    {title: "Webstorm", icon: webstorm},
    {title: "NPM", icon: npm},
    {title: "Yarn", icon: yarn},
  ];
  return (
    <article className={s.wrapper}>
      <Title>My Skills</Title>
      <ul className={s.list}>
        {
          tech.map((th, idx) => <Skill key={idx} {...th}/>)
        }
      </ul>
    </article>
  );
};

export default MySkills;