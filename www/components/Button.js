//export default function Button({ title, onClick, style }) {
//  const baseStyle = {
//    backgroundColor: "grey",
//    borderRadius: "5px",
//  };
//  return createElement(
//    "button",
//    {
//      onClick: onClick,
//      style: { ...baseStyle, ...style },
//    },
//    [title]
//  );
//}

// export default function Button({ title, onClick, style }) {
//   const baseStyle = {
//     backgroundColor: "grey",
//     borderRadius: "5px",
//   };
//   return {
//     type: "button",
//     attributes: {
//       style: { ...baseStyle, ...style },
//     },
//     events: {
//       click: onClick,
//     },
//     children: [title],
//   };
// }


import Component from "./Component.js";

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      title = "Valider",
      click = {},
      style = {}
    } = this.props;

    // console.log(this.props);

    const baseStyle = {
      backgroundColor: "#515151",
      borderRadius: "4px",
      color: "#fff",
      padding: "6px",
      fontSize: "16px",
    };
    return {
      type: "button",
      attributes: {
        style: { ...baseStyle, ...style },
      },
      events: {
        click
      },
      children: [title],
    };
  }
}

export default Button;
