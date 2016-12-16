$('#help').on('click', function (event) {
  $.get('https://ceep.herokuapp.com/cartoes/instrucoes', function (cartoes) {
    $(cartoes.instrucoes).each(function () {
      adicionaCartao(this.conteudo, this.cor);
    });
  });
});
