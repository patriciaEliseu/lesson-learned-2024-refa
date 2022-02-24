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

// requisito 3
function addImg() {
  const createImg = document.createElement("img");
  createImg.setAttribute("id", "minha_foto");
  createImg.setAttribute("src", "perfil.jpg");
  body.appendChild(createImg);
}

// requisito 4
function tarefasAprendidas() {
  const licoes = [
    "HTML",
    "CSS",
    "JavaScript",
    "Git",
    "Github",
    "For/loop",
    "função",
    "variáveis",
    "constantes",
    "condicionais",
  ];

  const createUl = document.createElement("ol");
  createUl.setAttribute("id", "licoes_aprendidas");

  for (let index = 0; index < licoes.length; index += 1) {
    const createLi = document.createElement("li");
    createLi.innerText = licoes[index];
    createUl.appendChild(createLi);
  }
  body.appendChild(createUl);
}

// requisito 5
function tarefasAAprender() {
  const licoes = [
    "ReactJS",
    "Flexbox",
    "SQL",
    "NOSQL",
    "NodeJS",
    "Heroku",
    "função",
    "variáveis",
    "constantes",
    "condicionais",
  ];

  const createUl = document.createElement("ul");
  createUl.setAttribute("id", "licoes_a_aprender");

  for (let index = 0; index < licoes.length; index += 1) {
    const createLi = document.createElement("li");
    createLi.innerText = licoes[index];
    createUl.appendChild(createLi);
  }
  body.appendChild(createUl);
}

header();
addImg();
tarefasAprendidas();
tarefasAAprender();
