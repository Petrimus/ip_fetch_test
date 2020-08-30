const regex = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;

myFetchFunction = () => {
  fetch("http://localhost:3001/api/object")
    .then((response) => response.json())
    .then((data) => data.map((person) => person.ip))
    .then((data) => data.filter((ip) => ip.match(regex)))
    .then((data) => {
      data.forEach((ip) => {
        addContent(ip);
      });
    });
};

function addContent(value) {
  const node = document.createElement("div");
  node.setAttribute("class", "ip");
  const textNode = document.createTextNode(value);
  node.appendChild(textNode);
  results.appendChild(node);
}
