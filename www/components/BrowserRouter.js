import DomRenderer from "../core/DomRenderer.js";
import Link from "./Link.js";

let routerBasePath;

export default function BrowserRouter(routes, rootElement, baseUrl = "") {
  routerBasePath = baseUrl;
  let pathname = location.pathname.replace(routerBasePath, "");
  if(!(pathname in routes)){
    pathname = "/404";
  }

  rootElement.appendChild(DomRenderer(routes[pathname]()));

  const oldPushState = history.pushState;
  history.pushState = function (data, unused, url) {
    oldPushState.call(history, data, unused, url);
    window.dispatchEvent(new Event("popstate"));
  };

  window.addEventListener("popstate", function () {
    let pathname = location.pathname.replace(routerBasePath, "");
    if(!(pathname in routes)){
      pathname = "/404";
    }

    rootElement.replaceChild(
      DomRenderer(routes[pathname]()),
      rootElement.childNodes[0]
    );
  });
}