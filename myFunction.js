myFetchFunction = () => {
  // Write your code here. Use addContent(string) to add string inside
  // a <div> element inside webpage
  
};

function addContent(value) {
  const node = document.createElement("div");
  node.setAttribute("class", "ip");
  const textNode = document.createTextNode(value);
  node.appendChild(textNode);
  results.appendChild(node);
}
