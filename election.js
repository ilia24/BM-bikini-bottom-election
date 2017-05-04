$(function() {

  $.ajax({
    method: 'GET',
    url: 'https://bb-election-api.herokuapp.com/',
    dataType: 'json'
  }).done(function(data){
    console.log('Ajax call for candidates successful');
    for (var c = 0; c < data.candidates.length; c++) {
      candid = data.candidates[c]
      $('<li>').html('Candidate ' + (c + 1) + ': ' + candid.name + " Votes: " + candid.votes).appendTo('#candidatelist');
    };
  }).fail(function(){
    console.log('form submission failed')
  }).always(function(){
  });

});
