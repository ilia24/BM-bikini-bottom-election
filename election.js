$(function() {

  $.ajax({
    method: 'GET',
    url: 'https://bb-election-api.herokuapp.com/',
    dataType: 'json'
  }).done(function(data){
    console.log(data);
    $('#greeting-list').prepend(data)
  }).fail(function(){
    console.log('form submission failed')
  }).always(function(){
  });

});
