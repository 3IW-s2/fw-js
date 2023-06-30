import Component from "./Component.js";

export default class Input extends Component {
    constructor(props, checkLocalStorage = false) {
        super(props);

        // If this option is true, the input will be filled with the value of the localStorage
        // Using the name of the input as the key
        this.checkLocalStorage = checkLocalStorage;
    }

    render() {
        // add properties to the input element to add label and an input field
        const {
            label = "Label",
            type = "text",
            name = "name",
            value = this.checkLocalStorage ? (localStorage.getItem(name) ?? "") : "",
            placeholder = "",
            style = {},
        } = this.props;

        return {
            type: "div",
            children: [
                {
                    type: "label",
                    children: [label],
                    attributes: {
                        for: name,
                    }
                },
                {
                    type: "input",
                    attributes: {
                        type: type,
                        name: name,
                        value: value,
                        placeholder: placeholder,
                        style: style,
                    },
                    // events: {
                    //     input: (event) => {
                    //         this.props.change.handler(event);
                    //     }
                    // }
                }
            ],
            attributes: {
                ...this.defaultAttributes,
                class: "flex-column",
            }
        }
    }
}