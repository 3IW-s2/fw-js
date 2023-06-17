import {BrowserLink} from "../components/BrowserRouter.js";

export default function Page3() {
  return {
    type: "div",
    children: [
      BrowserLink("Page 1", "/page1"),
      BrowserLink("Page 2", "/page2"),
    ],
  };
}
