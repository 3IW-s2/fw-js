import DomRenderer from "../core/DomRenderer.js";

export default class BrowserRouter {
  constructor(routes, rootElement, baseUrl = "") {
    this.routes = routes;
    this.rootElement = rootElement;
    this.routerBasePath = baseUrl;
    this.init();
  }

  init() {
    let pathname = location.pathname.replace(this.routerBasePath, "");
    if (!(pathname in this.routes)) {
      pathname = "/404";
    }

    this.rootElement.appendChild(DomRenderer(this.routes[pathname]()));

    const oldPushState = history.pushState;
    history.pushState = function (data, unused, url) {
      oldPushState.call(history, data, unused, url);
      window.dispatchEvent(new Event("popstate"));
    };

    window.addEventListener("popstate", () => {
      let pathname = location.pathname.replace(this.routerBasePath, "");
      if (!(pathname in this.routes)) {
        pathname = "/404";
      }

      this.rootElement.replaceChild(
          DomRenderer(this.routes[pathname]()),
          this.rootElement.childNodes[0]
      );
    });
  }
}
