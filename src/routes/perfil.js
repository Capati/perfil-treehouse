var express = require("express");
var querystring = require("querystring");
var router = express.Router();

var Perfil = require("../getPerfil");

// Página de perfis
router.post("/", function (req, res, next) {
  var body = "";

  req.on("data", function (data) {
    body += data;
  });

  req.on("end", function () {
    var POST = querystring.parse(body.toString());

    if (POST.usuario.length > 0) {

      // Pega o perfil do usuário
      var estudante = new Perfil(POST.usuario);

      estudante.on("end", function (json) {
        // Guarda os valores
        var valores = {
            gravatar_url: json.gravatar_url,
            profile_name: json.profile_name,
            badges: json.badges.length,
            pontosJavaScript: json.points.JavaScript
        }

        res.render("perfil", valores);

      });

      estudante.on("error", function(error){
        // Exibir erro
        res.render("index", { msgErro: error.message });
      });

    } // Se usuário não for em branco

  });

});

module.exports = router;
