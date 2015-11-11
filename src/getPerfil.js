var EventEmitter = require("events").EventEmitter;
var http = require("http");
var https = require("https");
var util = require("util");

/**
 * Um EventEmiter para obter o perfil de um estudante da TreeHouse
  * @param usuario
  *constructor
  */

function Perfil(usuario) {

  EventEmitter.call(this);

  perfilEmitter = this;

  var url = "https://teamtreehouse.com/" + usuario + ".json";

  // Conecta-se com a API (http://teamtreehouse.com/username.json)
  var req = https.get(url, function(res) {
    var body = "";

    if (res.statusCode !== 200) {
      req.abort();
      // Erro do código de status
      perfilEmitter.emit("error", new Error("Houve um erro ao obter o perfil " + usuario +". (" + http.STATUS_CODES[res.statusCode] + ")"));
    }

    // Lê as informações
    res.on("data", function(chunck) {
      body += chunck;
      perfilEmitter.emit("data", chunck);
    });

    res.on("end", function() {
      if (res.statusCode === 200) {
        try {
          // Parse as info
          var perfil = JSON.parse(body);
          perfilEmitter.emit("end", perfil);
        } catch (error) {
          perfilEmitter.emit("error", error);
        }
      }
    }).on("error", function(error) {
      perfilEmitter.emit("error", error);
    });
  });

}

util.inherits(Perfil, EventEmitter);

module.exports = Perfil;
