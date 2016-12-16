var usuario = prompt('Qual é o seu email:');

$.getJSON('https://ceep.herokuapp.com/cartoes/carregar?callback=?', {usuario : usuario}, function (resp) {
    resp = {cartoes : [
      {conteudo : 'texto'},
      {conteudo : 'texto2'}
    ]}

    $(resp.cartoes).each(function () {
        adicionaCartao(thisx.conteudo)
    });

});
