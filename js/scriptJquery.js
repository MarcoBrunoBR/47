$('.novoCartao').submit(function () {
  let conteudo = $('.novoCartao-conteudo').val().trim();

  let tagConteudo = $('<p>').text(conteudo);
  tagConteudo.addClass('cartao-conteudo');

  let tagCartao = $('<div>').addClass('cartao')
                            .html(tagConteudo);

  let botao = $('<button>').addClass('opcoesDoCartao-remove')
                           .click(removeCartao);

  tagCartao.appendTo('.mural')


});

let nome = {};

nome.coisa = '';


var coisa = document.querySelector('.coisa');

coisa.classList.add('isActive')
