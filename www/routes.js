import Page1 from "./views/Page1.js";
import Page2 from "./views/Page2.js";
import Page3 from "./views/Page3.js";
import notFound from "./views/notFound.js";

export default {
  "/": Page3,
  "/page1": Page1,
  "/page2": Page2,
  "/404": notFound
};
