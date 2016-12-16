'use strict';
(function (doc) {
  let $cartaoMenuEdita = doc.querySelector('.cartao-menu-edita');
  let $cartaoConteudo = doc.querySelector('.cartao-conteudo');

  $cartaoMenuEdita.addEventListener('click', function () {
    if (!$cartaoConteudo.getAttribute('contenteditable')) {
      $cartaoConteudo.setAttribute('contenteditable', true);
      $cartaoConteudo.focus();
    } else {
      $cartaoConteudo.removeAttribute('contenteditable');

    }
  });
})(document);
