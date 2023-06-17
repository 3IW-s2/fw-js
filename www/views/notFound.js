import { BrowserLink } from "../components/BrowserRouter.js";

export default function notFound() {
    return {
        type: "div",
        children: [
            {
                type: "h1",
                children: ["CETTE PAGE N'EXISTE PAS"],
            },
            BrowserLink("Page 2", "/page2")
        ],
    };
}
