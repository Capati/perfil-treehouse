var express = require("express");
var router = express.Router();

// Página inicial
router.get("/", function (req, res){
  res.render("index", { titulo: "Perfil TreeHouse" });
});

module.exports = router;
