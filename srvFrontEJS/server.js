const express = require("express");
const app = express();
const port = 25000;

app.set("view engine", "ejs");
app.use(express.static("public"));

const salasDeAula = [
  { id: 1, descricao: "Sala 1", localizacao: "Prédio 1", capacidade: 40, removido: false },
  { id: 2, descricao: "Sala 2", localizacao: "Prédio 1", capacidade: 45, removido: false },
];

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/manutSalaDeAula", (req, res) => {
  res.render("manutSalaDeAula", { salasDeAula });
});

app.listen(port, () => {
  console.log(`Servidor EJS rodando na porta ${port}`);
});