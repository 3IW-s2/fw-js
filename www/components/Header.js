// create a header extending the Component class

import Component from './Component.js';
import Button from "./Button.js";
import Link from "./Link.js";
import BrowserLink from "./BrowserLink.js";
import Title from "./Title.js";
import Utils from "../core/Utils.js";
export class Header extends Component {
    constructor(props) {
        super(props)
        this.links = [
            new BrowserLink({title: "Accueil", link: "/"}),
            new BrowserLink({title: "À Propos", link: "/about"}),
            new BrowserLink({title: "Contact", link: "/contact"}),
            new BrowserLink({title: "????", link: "/aoifaofja"}),
        ];
    }

    render() {
        return {
            type: "div",
            attributes: {
                ...this.defaultAttributes,
            },
            children: [
                {
                    type: "div",
                    children: [
                        {
                            type: "div",
                            children: [
                                ...this.links.map(link => link.render()),
                            ],
                            attributes: {
                                class: "links",
                            }
                        }
                    ],
                    attributes: {
                        class: "header",
                    },
                },
            ],
        };
    }
}