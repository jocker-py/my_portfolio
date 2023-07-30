import React, {FC} from "react";
import s from "./Page.module.scss";
import HeadTitle, {HeadTitlePropsType} from "../HeadTitle/HeadTitle";

type PagePropsType = HeadTitlePropsType & {
  children: React.ReactNode
}

const Page: FC<PagePropsType> = ({children, ...headTitleProps}) => {
  return (
    <section className={s.container}>
      <div className={s.wrapper}>
        {(headTitleProps.title ||
          headTitleProps.subtitle ||
          headTitleProps.background) &&
        <HeadTitle {...headTitleProps}/>}
        {children}
      </div>
    </section>
  );
};

export default Page;