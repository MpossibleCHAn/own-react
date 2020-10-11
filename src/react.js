const container = document.getElementById("app");

const element = {
  type: "h1",
  props: {
    title: "foo",
    children: "hello",
  },
};

const node = document.createElement(element.type);
node["title"] = element.props.title;

const text = document.createTextNode("");
text["nodeValue"] = element.props.children;

node.appendChild(text);

container.appendChild(node);
