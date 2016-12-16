$('#sync').on('click', function (event) {
  var $cartoes = $('.cartao');
  var cartoes = [];

  $cartoes.each(function () {
    var cartao = {};
    cartao.conteudo = $(this).find('.cartao-conteudo').text();

    cartoes.push(cartao);
  });

  var mural = {
    usuario : 'marco@gmail.com',
    cartoes : cartoes
  }

  $.ajax({
    method : 'POST',
    url : 'https://ceep.herokuapp.com/cartoes/salvar',
    data : mural,
    success : function (resp) {
      console.log(resp.quantidade + " cartoes de " + resp.usuario);
    },
    error : function () {
      console.log('error');
    },
    complete : function () {
      console.log('Feito...');
    }
  })
});
