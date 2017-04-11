$(document).ready (function() {
  console.log('js is linked');

$('#guess-number-form').on('submit', function(event){
  event.preventDefault();
  $.ajax({
    method: 'get',
    url: 'localhost:3000/pickanumber',
    data: $('#guess-number-form').serialize(),
    success: onSuccess,
    error: onError
  })
})

  function onSuccess(res) {
    console.log(res);
    $('#express').html(res);
  }

function onError(jqXHR, status, error){
  console.log('error:', error);
}

$('#target-number-form').on('submit', function(event){
  event.preventDefault();
  $.ajax({
    method: 'post',
    url: 'localhost:3000/pickanumber',
    data: $('#target-number-form').serialize(),
    success: onSubmit,
    error: onError
  })
})

  function onSubmit(res) {
    console.log(res)
  }

// error message: jquery-3.2.1.min.js:4 XMLHttpRequest cannot load file:///pick-a-number. Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https.

});
