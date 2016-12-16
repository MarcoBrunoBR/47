$('a').on('click', function () {

});

function sync() {
  console.log('Código par sincronizar');
}

$('document').on('sync', function () {
  console.log('Código para sincronizar');
});

$('#sync').on('click', function () {
  $('document').trigger('sync');
})

document.createEvent('coisa', function () {

});
