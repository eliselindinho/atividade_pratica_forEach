let tBodyElement = document.querySelector("#resultado");

const listaUsuarios = [
  {
    id: 1,
    nome: "Thiago Pereira",
    sexo: "Masculino",
    idade: 20,
    email: "fulanodetal@termail.com",
  },
  {
    id: 2,
    nome: "Thaías Lins",
    sexo: "Feminino",
    idade: 19,
    email: "thaisdetal@gtailme.com",
  },
  {
    id: 3,
    nome: "Mariana Ferreira",
    sexo: "Feminino",
    idade: 25,
    email: "marianaferreira@tailme.com",
  },
  {
    id: 4,
    nome: "Pedro Ivo Silva",
    sexo: "Feminino",
    idade: 28,
    email: "manuelatrait@gtepmail.com",
  },
];

function listarUsuarios(item) {
  let trTds = `<tr>
              <td>${item.id}</td>
              <td>${item.nome}</td>
              <td>${item.sexo}</td>
              <td>${item.idade}</td>
              <td>${item.email}</td>
              </tr>`;
  tBodyElement.innerHTML += trTds;
}

listaUsuarios.forEach(listarUsuarios);

window.addEventListener("onload", listarUsuarios);
