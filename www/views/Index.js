
import {Header} from "../components/Header.js";
import Compteur from "../components/Compteur.js";
import Link from "../components/Link.js";
import Title from "../components/Title.js";
import TitleGenerator from "../components/TitleGenerator.js";
import Button from "../components/Button.js";

export default function Index() {
    return {
        type: "div",
        children: [
            new Header().render(),
            {
                type: "div",
                children: [
                    {
                        type: "h1",
                        children: ["Accueil"],
                    },
                    new Button({
                        title: "Validdder",
                        click: {
                            handler: (event) => {
                                alert("Vous avez cliqué sur le bouton");
                                event.target.innerHTML = "Évènement déclenché";
                            },
                            options: {
                                once: true,
                            }
                        },
                        style: {}
                    }).render(),
                ],
                attributes: {
                    id: "page-container",
                }
            },
        ],
    };

}
