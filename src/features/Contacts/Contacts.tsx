import React from "react";
import {v1} from "uuid";
import s from "./Contacts.module.scss";
import {ContactItem, ContactItemType} from "./ContactItem/ContactItem";
import {faMap} from "@fortawesome/free-solid-svg-icons/faMap";
import {faEnvelopeOpen} from "@fortawesome/free-solid-svg-icons/faEnvelopeOpen";
import {faPhoneSquare} from "@fortawesome/free-solid-svg-icons";
import ContactLink from "./ContactLink/ContactLink";
import ContactForm from "./ContactForm/ContactForm";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {faTelegram} from "@fortawesome/free-brands-svg-icons/faTelegram";
import {faInstagram} from "@fortawesome/free-brands-svg-icons/faInstagram";
import {faViber} from "@fortawesome/free-brands-svg-icons/faViber";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons/faEnvelope";
import Page from "../../components/Page/Page";


const Contacts = () => {
  const contacts: Array<ContactItemType> = [
    {
      id: v1(),
      icon: faMap,
      title: "Address Point",
      subtitle: "16 Aerodromnaya street, Astravec, Belarus.",
    },
    {
      id: v1(),
      icon: faEnvelopeOpen,
      title: "Mail Me",
      subtitle: "buladzislau@gmai.com",
    },
    {
      id: v1(),
      icon: faPhoneSquare,
      title: "Call Me",
      subtitle: "+375 33 628-65-38",
    },
  ];
  const societies = [{
    id: v1(),
    icon: faGithub,
    link: "https://github.com/jocker-py",
  }, {
    id: v1(),
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/vladislav-belyaev1/",
  },
    {
      id: v1(),
      icon: faTelegram,
      link: "https://t.me/buladzislau",
    },
    {
      id: v1(),
      icon: faInstagram,
      link: "https://www.instagram.com/beljaev.v/",
    },
    {
      id: v1(),
      icon: faViber,
      link: "viber://chat?number=%2B375336555598",
    }, {
      id: v1(),
      icon: faEnvelope,
      link: "mailto:buladzislau@gmail.com",
    }];

  return (
    <Page background={"Contacts"} title={"Get In"} subtitle={"Touch"}>
      <div className={s.wrapper}>
        <article className={s.box}>
          <div className={s.contactsList}>
            {
              contacts.map((contact) =>
                <ContactItem key={contact.id} {...contact} />)
            }
          </div>
          <div className={s.societiesList}>
            {
              societies.map((society) =>
                <ContactLink key={society.id} {...society} />)
            }
          </div>
        </article>
        <ContactForm/>
      </div>
    </Page>
  );
};


export default Contacts;
