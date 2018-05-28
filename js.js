$(document).ready(function () {

  console.log("Iniciando Pedra, Papel e Tesoura");
  
 
 
  var options = [
    "pedra.png",
    "papel.png",
    "tesoura.png",
    "compu.png"
  ];
  $("#Comp").attr('src', options[3]);
  $("#pedra").attr('src', options[0]);
  $("#papel").attr('src', options[1]);
  $("#tesoura").attr('src', options[2]);
  $("#score").fadeIn('slow');
  console.log("Jogo iniciado!");
  
   $("#btn1").click(function () {
    jogar(0);
  });
  $("#btn2").click(function () {
    jogar(1);
  });
  $("#btn3").click(function () {
    jogar(2);
  });
  
  $("#zerar").click(function () {
    if (zerar() == null) {
    }
    else {
      setTimeout(zerar, 1000);
    }
  });

  function jogar(jogador) {
    var playedTimes = parseInt($('#played').html(), 10);
    $('#played').html(++playedTimes);

    
    var Computador = String(Math.random() * 3).charAt(0);
    $("#Comp").attr('src', options[Computador]);

    
    if (jogador == 0 && Computador == 2 || jogador == 1 && Computador == 0 || jogador == 2 && Computador == 1) {
      $('#jogo').text("Jogador venceu!");
      var vitorias = parseInt($('#vitorias').html(), 10);
      $('#vitorias').html(++vitorias);
      console.log("Jogador venceu!");
    }
    if (Computador == 0 && jogador == 2 || Computador == 1 && jogador == 0 || Computador == 2 && jogador == 1) {
      $('#jogo').text("Computador venceu!");
      var derrotas = parseInt($('#derrotas').html(), 10);
      $('#derrotas').html(++derrotas);
      console.log("Computador venceu!");
    }
    if (jogador == Computador) {
      $('#jogo').text("Deu empate!");
   var empates = parseInt($('#empates').html(), 10);
      $('#empates').html(++empates);
      console.log("Empatou!");
    }
  }
  
  function zerar() {
    if ($("#played").html() == "0") {
      return null;
    }
    else {
      $("#played").html(0);
      $("#jogo").html("");
      console.log("Pontuação zerada!");
      
      $("#Comp").attr('src', options[3]);
      $('.score').html("0");
      return zerar;
    }
  }

  
 
 
 
});
