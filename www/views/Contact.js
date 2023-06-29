import Button from "../components/Button.js";
import Compteur from "../components/Compteur.js";
import Link from "../components/Link.js";
import Header from "../components/Header.js";
import BrowserLink from "../components/BrowserLink.js";

export default function Contact() {
  return {
    type: "div",
    children: [
      new Header().render(),
      {
        type: "div",
        children: [
          {
            type: "h1",
            children: ["Contact"],
          },
          new Compteur({
            title: "Compteur page contact"
          }, 4).render(),
        ],
        attributes: {
            id: "page-container",
        }
      },
    ],
  };
}
