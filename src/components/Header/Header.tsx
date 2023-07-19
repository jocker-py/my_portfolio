import React from "react";
import s from "./Header.module.scss";
import {Endpoints} from "../../config/endpoints";
import {
  faHouseChimney,
  faUser,
  faBriefcase,
  faEnvelopeOpenText, faMoon,

} from "@fortawesome/free-solid-svg-icons";
import {NavIconLink} from "../common/NavIconLink/NavIconLink";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.themeSwitcher}>
          <FontAwesomeIcon icon={faMoon} size="xs" style={{fontSize: '28px'}}/>
        </div>
        <nav className={s.nav}>
          <NavIconLink to={Endpoints.Home} title={"HOME"} icon={faHouseChimney}/>
          <NavIconLink to={Endpoints.About} title={"ABOUT"} icon={faUser}/>
          <NavIconLink to={Endpoints.Portfolio} title={"PORTFOLIO"} icon={faBriefcase}/>
          <NavIconLink to={Endpoints.Contact} title={"CONTACT"} icon={faEnvelopeOpenText}/>
        </nav>
      </div>
    </header>
  );
};

export default Header;