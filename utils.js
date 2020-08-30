const resultNode = document.getElementById('results');

const fetchBtn = document.getElementById("fetch_ip");
fetchBtn.addEventListener("click", myFetchFunction);

const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", () => {
  while (resultNode.lastElementChild) {
    resultNode.removeChild(resultNode.lastElementChild);
  }
});