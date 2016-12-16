'use strict';

var Ninja = (function () {
  var module = {};

  var errors = new NinjaErrors();

  module.ajax = function (json) {
    var xhr = new XMLHttpRequest();

    var option = {
      url : json.url || errors.deuRuim('Pessoa você tem que passar uma URL'),
      method : json.method || 'GET',
      success : json.success || errors.error('Pessoa você não estava fazendo nada quando o AJAX retornar com sucesso, cria uma callback de success'),
      error : json.error
    }

    xhr.open(option.method, option.url);

    xhr.addEventListener('progress', function () {
      console.log('INDO');
    });

    xhr.addEventListener('load', function () {
      if (xhr.status.toString().match(/2[0-9]{2}/)) {
        option.success();
      };
    });

    xhr.addEventListener('error', function () {
      option.error();
    });

    xhr.send();
  };

  return {
    ajax : module.ajax
  }
});
