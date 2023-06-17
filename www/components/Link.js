export function Link(title, link, onClick) {
  const style = {
    color: "black",
    textDecoration: "none",
  };
  const events = {};
  if (onClick) {
    events.click = onClick;
  }
  return {
    type: "a",
    attributes: {
      href: link,
      style: style,
    },
    events: events,
    children: [title],
  };
}
