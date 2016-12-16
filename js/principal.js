let $mudaLayout = document.querySelector('#mudaLayout');
let $mural = document.querySelector('.mural');
let $removeCartoes = document.querySelectorAll('.opcoesDoCartao-remove');
let $novoCartao = document.querySelector('.novoCartao');
let $novoCartaoConteudo = document.querySelector('.novoCartao-conteudo');

$novoCartaoConteudo.addEventListener('input', function () {
  let $error = document.querySelector('.error');
  if ($error) {
    $error.remove();
  }
});

$novoCartao.addEventListener('submit', function (event) {
  let $novoCartaoConteudo = this.querySelector('.novoCartao-conteudo');

  if ($novoCartaoConteudo.value == '' && !this.querySelector('.error')) {
    let $msgError = document.createElement('span');
    $msgError.classList.add('error');
    $msgError.textContent = 'Preencha o campo acima';

    this.insertBefore($msgError, document.querySelector('.novoCartao-salvar'))
  } else if ($novoCartaoConteudo.value != '') {
    adicionaCartao($novoCartaoConteudo.value);

    $novoCartaoConteudo.value = '';
  };

  event.preventDefault();
});

function adicionaCartao (conteudo, cor) {
  let $template = document.querySelector('#cartao_0');
  let $novoCartao = $template.cloneNode(true);
  let contador = document.querySelectorAll('.cartao').length ++;

  $novoCartao.querySelector('.cartao-conteudo').innerHTML = conteudo.replace(/\n/g, '<br>');

  $novoCartao.setAttribute('id', 'cartao_' + contador);
  $novoCartao.querySelector('.opcoesDoCartao-remove').setAttribute('data-ref', contador);
  $novoCartao.classList.add(decideTipoDeCartao(conteudo));
  $novoCartao.style.backgroundColor = cor;

  document.querySelector('.mural').insertBefore($novoCartao, $template);
}

$mudaLayout.onclick = () => {
  $mural.classList.toggle('mural--linha');

  if ($mural.classList.contains('mural--linha')) {
    $mudaLayout.textContent = 'Bloco';
  } else {
    $mudaLayout.textContent = 'Linha';
  };
};

function removeCartao () {
  console.log('Dentro da funcao removeCartao');
  console.log(this);
  let $cartao = document.querySelector('#cartao_' + this.getAttribute('data-ref'));
  $cartao.classList.add('cartao--some');

  $cartao.addEventListener('transitionend', function () {
    $cartao.remove();
  });
}

document.querySelector('.mural').addEventListener('click', function (event) {
    let $origin = event.target;

    if ($origin.classList.contains('opcoesDoCartao-remove')) {
      removeCartao.bind($origin)();
    };
});

function decideTipoDeCartao (conteudo) {
  let maiorPalavra = '';
  let quebrasDeLinha = conteudo.split(/\n/g);
  let todasAsPalavras = conteudo.split(' ');
  let classQueVamosAdicionar = 'cartao--textoPequeno';

  todasAsPalavras.forEach(function (palavra) {
    if (palavra.length > maiorPalavra.length) {
      maiorPalavra = palavra;
    };
  });

  if (maiorPalavra.length < 9 && (quebrasDeLinha.length - 1) < 5 && conteudo.replace(/\n| /g, '').length < 55) {
    classQueVamosAdicionar = 'cartao--textoGrande';
  };

  return classQueVamosAdicionar;
}
