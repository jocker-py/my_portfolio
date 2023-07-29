import React from "react";
import s from "./MySkills.module.scss";
import Skill, {SkillType} from "./Skill/Skill";

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
import {v1} from "uuid";
import Title from "../../../components/Title/Title";


const MySkills = () => {
  const techs: Array<SkillType> = [
    {id: v1(), title: "React", icon: react},
    {id: v1(), title: "JavaScript", icon: js},
    {id: v1(), title: "TypeScript", icon: ts},
    {id: v1(), title: "Redux", icon: redux},
    {id: v1(), title: "GitHub", icon: github},
    {id: v1(), title: "HTML", icon: html},
    {id: v1(), title: "CSS", icon: css},
    {id: v1(), title: "SCSS/SASS", icon: sass},
    {id: v1(), title: "Figma", icon: figma},
    {id: v1(), title: "Heroku", icon: heroku},
    {id: v1(), title: "Axios", icon: axios},
    {id: v1(), title: "Node.JS", icon: node},
    {id: v1(), title: "Git", icon: git},
    {id: v1(), title: "Storybook", icon: storybook},
    {id: v1(), title: "Jest", icon: jest},
    {id: v1(), title: "MaterialUI", icon: material},
    {id: v1(), title: "Webpack", icon: webpack},
    {id: v1(), title: "EsLint", icon: eslint},
    {id: v1(), title: "Prettier", icon: prettier},
    {id: v1(), title: "MarkDown", icon: markdown},
    {id: v1(), title: "VSCode", icon: vscode},
    {id: v1(), title: "Webstorm", icon: webstorm},
    {id: v1(), title: "NPM", icon: npm},
    {id: v1(), title: "Yarn", icon: yarn},
  ];
  return (
    <article className={s.wrapper}>
      <Title>My Skills</Title>
      <div className={s.list}>
        {
          techs.map((tech) => <Skill {...tech}/>)
        }
      </div>
    </article>
  );
};

export default MySkills;