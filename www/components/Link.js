import Component from "./Component.js";

export default class Link extends Component {

  constructor(props) {
    super(props);
  }

  shouldUpdate(newProps) {
    // Comparaison des nouvelles props avec les anciennes props pour déterminer si le composant doit être mis à jour
    // Retourne true ou false en fonction du résultat
  }

  render() {
    const {
      title = "Lien",
      link = {},
      click = {}
    } = this.props;

    const style = {
      // color: "black",
      // textDecoration: "none",
    };

    return {
      type: "a",
      attributes: {
        href: link,
        style: style,
        class: "link",
        ...this.defaultAttributes,
      },
      events: {
        click
      },
      children: [title],
    };
  }
}
