const body = document.querySelector("body");
// requisito 2
function header() {
  const createHeader = document.createElement("header");
  createHeader.setAttribute("id", "cabecalho");

  const createTitle = document.createElement("h1");
  createTitle.setAttribute("id", "titulo");
  createTitle.innerText = "Lessons Learned";

  createHeader.appendChild(createTitle);
  body.appendChild(createHeader);
}

header();
