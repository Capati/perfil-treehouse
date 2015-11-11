// Habilitando o modo restrito
"use_strict";

// Carregando e definindo módulos principais
var express = require("express");
var path = require("path");
var app = express();

// Configurnado o view engine
app.set("view engine", "jade");
app.set("views", path.join(__dirname,"/views"));

// Servindo arquivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Diretório root do site
app.get("/", function (req, res) {
  res.send("Olá mundo!");
});

// Iniciando o servidor
var servidor = app.listen(3000, function () {
  console.log("Servidor iniciado em: localhost:3000");
});
