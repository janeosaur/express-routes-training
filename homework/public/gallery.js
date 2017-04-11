$(document).ready(function(){
  $('#artists-form').on('submit', function() {
    event.preventDefault();

    $.ajax({
      method: 'post',
      url: 'localhost:3000/artworks/',
      data: $('#artists-form').serialize(),
      success: submitNewArtist,
    });
  })

function submitNewArtist(res) {
  console.log(res)
}

// error: jquery-3.1.0.min.js:4 XMLHttpRequest cannot load localhost:3000/artworks/. Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https.

});

  //  solutions
//   $('#new-artwork-form').on('submit', addArtwork);
// });
//
// function addArtwork(event){
//   event.preventDefault();
//   $.ajax({
//     url: '/artworks',
//     method: 'POST',
//     data: $('#new-artwork-form').serialize(),
//     success: handleAddArtworkSuccess,
//     error: handleError
//   });
// }
//
// // set art gallery ul html to be list items of artwork response info
// function handleAddArtworkSuccess(artworkResponse){
//   console.log(artworkResponse);
//   var artList = $('#gallery');
//   artList.html(artworkResponse.map(getSummary));
// }
//
// // take in one artwork and return a list item with its artist and name/title
// function getSummary(artwork){
//   return `<li>${artwork.name} by ${artwork.artist}</li>`;
// }
//
// function handleError(jqXHR, status, error){
//   console.log('error:', error);
// }
