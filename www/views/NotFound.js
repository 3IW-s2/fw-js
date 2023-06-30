import Header from "../components/Header.js";
import BrowserLink from "../components/BrowserLink.js";

export default class NotFound {
    render() {
        return {
            type: "div",
            children: [
                {
                    type: "div",
                    children: [
                        {
                            type: "h1",
                            children: ["On est où là ? (404)"],
                        },
                    ],
                    attributes: {
                        id: "page-container",
                    }
                },
            ],
        };
    }
}
