export default function generateStructure(structure) {
  const element = document.createElement(structure.type);
  if (structure.attributes) {
    for (let attrName in structure.attributes) {
      if (attrName.startsWith("data-")) {
        element.dataset[attrName.replace("data-", "")] = structure.attributes[attrName];
      } else if (attrName === "style") {
        Object.assign(element.style, structure.attributes[attrName]);
      } else element.setAttribute(attrName, structure.attributes[attrName]);
    }
  }
  if (structure.events) {
    // console.log(structure.events);
    for (let eventName in structure.events) {
      // console.log(structure.events[eventName]);
      if (Object.keys(structure.events[eventName]).length === 0) {
        console.log("No handler for event " + eventName);
        continue;
      }
      element.addEventListener(eventName, structure.events[eventName].handler, structure.events[eventName].options);
    }
  }

  if (structure.children) {
    for (let child of structure.children) {
      let subChild;
      if (typeof child === "string") {
        subChild = document.createTextNode(child);
      } else {
        subChild = generateStructure(child);
      }
      element.appendChild(subChild);
    }
  }
  return element;
}

//create an id generator like 4avv4a5d
export function generateId() {
  const identifiers = Array.from(document.querySelectorAll("[data-identifier]")).map((element) => element.dataset.identifier);
  const identifier = Math.random().toString(36).slice(2, 11);
  if (identifiers.includes(identifier)) {
    return generateId();
  }
  return identifier;
}
