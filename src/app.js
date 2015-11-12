// Habilitando o modo restrito
"use_strict";

// Carregando e definindo módulos principais
var express = require("express");
var path = require("path");
var app = express();

app.set("port", (process.env.PORT || 5000));

// Importando rotas
var routes = require("./routes/index");
var perfil = require("./routes/perfil");

// Configurnado o view engine
app.set("view engine", "jade");
app.set("views", path.join(__dirname,"/views"));

// Servindo arquivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Definindo as rotas
app.use("/", routes);
app.use("/perfil", perfil);

// Diretório root do site
app.get("/", function (req, res) {
  res.send("Olá mundo!");
});

// Iniciando o servidor
var servidor = app.listen(app.get("port"), function () {
  console.log("Servidor iniciado em: " + app.get("port"));
});

if (app.get("env") === "development") {
  app.locals.pretty = true;
}

module.exports = app;
