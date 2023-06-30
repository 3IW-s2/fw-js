import Component from "./Component.js";
import Link from "./Link.js";

export default class InstallerForm extends Component{
    constructor(props) {
        super(props);

        this.title = props.title ?? "Formulaire";
        this.description = props.description ?? "Description";
        this.inputs = props.inputs ?? [];
        this.linkDetails = {
            class: props.linkDetails?.class ?? "",
            title: props.linkDetails?.title ?? "Lien",
            link: props.linkDetails?.link ?? null,
        }
    }

    render() {
        return {
            type: "div",
            children: [
                {
                    type: "div",
                    children: [
                        {
                            type: "div",
                            children: [
                                {
                                    type: "h1",
                                    children: [this.title],
                                },
                                {
                                    type: "p",
                                    children: [this.description],
                                },
                                {
                                    type: "div",
                                    children: [
                                        ...this.inputs.map(input => input.render()),
                                    ],
                                    attributes: {
                                        class: "flex-column form-container--content"
                                    }
                                },
                            ]
                        },
                        new Link({
                            class: this.linkDetails.class,
                            title: this.linkDetails.title,
                            link: this.linkDetails.link,
                            click: {
                                handler: (event) => {
                                    this.inputs.forEach(input => {
                                        const inputDom = document.querySelector(`[data-identifier='${input.identifier}']`).querySelector("input");
                                        localStorage.setItem(inputDom.name, inputDom.value);
                                    });

                                    event.preventDefault();
                                    history.pushState({}, undefined, this.linkDetails.link);
                                }
                            }
                        }).render(),

                    ],
                    attributes: {
                        class: "flex-column form-container"
                    },
                }
            ],
            attributes: {
                id: "page-container",
            }
        }
    }
}