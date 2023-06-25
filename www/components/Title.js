import Component from "./Component.js";

export default class Title extends Component {
    constructor(props, defaultTitle = "Titre par défaut") {
        super(props);
        this.state = { title: defaultTitle };
    }

    render() {
        return {
            type: "div",
            attributes: {
                ...this.defaultAttributes,
            },
            children: [
                {
                    type: "h1",
                    children: [this.state.title],
                },
            ],
        };
    }
}
