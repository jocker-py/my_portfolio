import React, {FC} from "react";
import s from "./Title.module.scss";

type TitlePropsType = {
  className?: string;
  children: React.ReactNode
}

const Title: FC<TitlePropsType> = ({className, children}) => {
  return (
    <div className={className ? s.title + " " + className : s.title}>
      {children}
    </div>
  );
};

export default Title;