import Component from "./Component.js";
import {generateId} from "../core/DomRenderer.js";
import Title from "./Title.js";
import Utils from "../core/Utils.js";

export default class TitleGenerator extends Component {
    constructor(props, titleNumber = 1) {
        super(props);
        this.state = {
            titleNumber: titleNumber < 0 ? 0 : titleNumber,
        };
    }

    increment() {
        // increment the counter by 1
        this.setState({ titleNumber: this.state.titleNumber + 1 });
    }

    decrement() {
        // decrement the counter by 1
        this.setState({ titleNumber: this.state.titleNumber - 1 < 0 ? 0 : (this.state.titleNumber - 1) });
    }

    render() {
        const titles = Array.from({length: this.state.titleNumber}, (v, k) => k+1).map((item) => new Title(null, `Titre ${item}`));
        return {
            type: "div",
            attributes: {
                ...this.defaultAttributes,
            },
            children: [
                {
                    type: "h2",
                    children: [
                        `Compteur: ${this.state.titleNumber.toString().toUpperCase()}`,
                    ],
                },
                {
                    type: "button",
                    children: ["-"],
                    events: {
                        click: {
                            handler: () => {
                                this.decrement()
                            },
                        },
                    },
                },
                {
                    type: "input",
                    attributes: {
                        type: "text",
                        value: this.state.titleNumber,
                    },
                    events: {
                        keyup: {
                            handler: (event) => {
                                this.setState({ counter: event.target.value });
                            },
                        },
                    },
                },
                {
                    type: "button",
                    children: ["+"],
                    events: {
                        click: {
                            handler: () => {
                                this.increment();
                            },
                        },
                    },
                },
                ...titles.map((item) => item.render()),
            ],
        };
    }
}
