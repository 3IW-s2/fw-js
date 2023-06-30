import BrowserLink from "../components/BrowserLink.js";
import InstallerForm from "../components/InstallerForm.js";
import Input from "../components/Input.js";

export default class SetupWebsite extends InstallerForm{
    constructor() {
        super({
            title: "Initialisation de l'application",
            description: "Les informations suivantes sont nécessaires pour configurer l'application'",
            inputs: [
                new Input({
                    label: "Nom de l'application",
                    type: "text",
                    name: "appName",
                    placeholder: "Nom de l'application",
                    required: true,
                }, true),
            ],
            linkDetails: {
                class: "installer-button",
                title: "Étape suivante",
                link: "/app-confirmation",
            }
        });
    }
}