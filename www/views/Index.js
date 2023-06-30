
import Header from "../components/Header.js";
import Button from "../components/Button.js";
import BrowserLink from "../components/BrowserLink.js";
import InstallerForm from "../components/InstallerForm.js";

export default class Index extends InstallerForm{

    constructor() {
        super({
            title: "Bienvenue sur l'installation WebTrunk",
            description: "Bienvenue sur l'installation WebTrunk. Cette installation va vous guider à travers les étapes nécessaires pour installer WebTrunk sur votre serveur.",
            linkDetails: {
                class: "installer-button",
                title: "Commencer l'installation",
                link: "/db-setup",
            }
        });
    }
}

