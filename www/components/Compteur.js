import Component from "./Component.js";
import {generateId} from "../core/DomRenderer.js";
import BrowserLink from "./BrowserLink.js";
import TitleGenerator from "./TitleGenerator.js";

export default class Compteur extends Component {
  constructor(props, startingValue = 0 ) {
    super(props);
    this.state = { counter: startingValue };
    this.props.title = props?.title ?? "Compteur";
    this.titleGenerator = new TitleGenerator(null);
  }

  increment() {
    this.setState({ counter: this.state.counter + 1 });
  }

  decrement() {
    this.setState({ counter: this.state.counter - 1 });
  }

  render() {
    return {
      type: "div",
      attributes: {
        ...this.defaultAttributes,
      },
      children: [
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
          type: "h2",
          children: [
              `${this.props.title}: ${this.state.counter.toString().toUpperCase()}`,
          ],
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
        {
          type: "input",
          attributes: {
            type: "text",
            value: this.state.counter,
          },
          events: {
            keyup: {
              handler: (event) => {
                this.setState({ counter: event.target.value });
              },
            },
          },
        },
        this.titleGenerator.render(),
      ],
    };
  }
}
