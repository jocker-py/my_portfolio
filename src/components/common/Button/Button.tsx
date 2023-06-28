import React, {ButtonHTMLAttributes, DetailedHTMLProps, FC} from "react";
import s from "./Button.module.css";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement>

type ButtonPropsType = DefaultButtonPropsType & {
  className?: string;
}

const Button: FC<ButtonPropsType> = ({className, children, ...other}) => {
  return <button className={className ? s.button + " " + className : s.button}
                 {...other}>{children}</button>;
};

export default Button;