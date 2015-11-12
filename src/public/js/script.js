$(window).ready(function (){
  // Muda o estado do botão ao enviar o form
  $("#enviarPerfil").submit(function () {
    $("#botaoBuscar").val($("#botaoBuscar").val() + "...");
    $("#botaoBuscar").attr("disabled", "disabled");
  });
});
