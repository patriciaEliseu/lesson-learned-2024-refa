// requisito 2
function header() {
  const body = document.querySelector("body");
  const createHeader = document.createElement("header");
  createHeader.setAttribute("id", "cabecalho");

  const createTitle = document.createElement("h1");
  createTitle.setAttribute("id", "titulo");
  createTitle.innerText = "Lessons Learned";

  createHeader.appendChild(createTitle);
  body.appendChild(createHeader);
}

header();

// requisito 3

function addImg() {
  const body = document.querySelector("body");

  const createImg = document.createElement("img");
  createImg.setAttribute("id", "minha_foto");
  createImg.setAttribute("src", "perfil.jpg");
  body.appendChild(createImg);
}

addImg();
