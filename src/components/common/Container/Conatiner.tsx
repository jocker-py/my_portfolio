import React, {FC} from "react";
import s from "./Container.module.css";

type ContainerPropsType = {
  className?: string;
  children: React.ReactNode
}

const Container: FC<ContainerPropsType> = ({className, children}) => {
  return <div className={className ? s.container + " " + className : s.container}>
    {children}
  </div>;
};

export default Container;