
myFetchFunction = () => {
  // enter code here. Calling addContent(string) will add a div with
  // string to the web page
};

function addContent(value) {
  const node = document.createElement("div");
  node.setAttribute("class", "ip");
  const textNode = document.createTextNode(value);
  node.appendChild(textNode);
  results.appendChild(node);
}
