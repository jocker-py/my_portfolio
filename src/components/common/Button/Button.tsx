import React, {ButtonHTMLAttributes, DetailedHTMLProps, FC} from "react";
import s from "./Button.module.scss";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement>

type ButtonPropsType = DefaultButtonPropsType & {
  text: string;
  icon: IconProp;
}

const Button: FC<ButtonPropsType> = ({className, text, icon, ...other}) => {
  const finalClassName = className ? s.button + " " + className : s.button;
  return <button className={finalClassName}{...other}>
    <span className={s.text}>{text}</span>
    <span className={s.icon}>{
      <FontAwesomeIcon icon={icon} size="lg" className={s.icon} style={{backgroundColor: '#ffb400'}}/>
    }</span>
  </button>;
};

export default Button;