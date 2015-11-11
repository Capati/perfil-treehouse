// Habilitando o modo restrito
"use_strict";

// Carregando e definindo módulos principais
var express = require("express");
var app = express();

// Diretório root do site
app.get("/", function (req, res) {
  res.send("Olá mundo!");
});

// Iniciando o servidor
var servidor = app.listen(3000, function () {
  console.log("Servidor iniciado em: localhost:3000");
});
