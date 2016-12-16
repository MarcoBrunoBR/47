(function () {
  'use strict';

  var n = new Ninja();

  //https://ceep.herokuapp.com/cartoes/instrucoes
  n.ajax({
    url: '',
    method: 'GET',
    success : function () {
      console.log('SUCCESS');
    },
    error : function () {
      console.log('ERROR');
    }
  })
})();









































var n = 'coisa2';
