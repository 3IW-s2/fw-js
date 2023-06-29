import Header from "../components/Header.js";
export default function About() {

  return {
    type: "div",
    children: [
      new Header().render(),
      {
        type: "div",
        children: [
          {
            type: "h1",
            children: ["À Propos"],
          },
        ],
        attributes: {
          id: "page-container",
        }
      },
    ],
  };

}
