var express = require('express');
var app = express();

 // Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
 app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
 });

 app.get('/', function (req, res) {
   res.sendFile('views/index.html' , { root : __dirname});
 });

// Number Guessing Game

  app.get('/pickanumber', function (req, res) {
    // console.log(req.query.number);
    res.send(req.query.number);
    var targetNumber = 10;
    if (req.query.number > targetNumber) {
      console.log('too high');
    } else if (req.query.number < targetNumber) {
      console.log('too low')
    } else {
      console.log('nailed it')
    }
  });

// Art Gallery
var artworks = [
  { title: 'drunk in love',
    artist: 'beyonce',
    description: 'hiphop'},
  { title: 'location',
    artist: 'khalid',
    description: 'r&b'
  }
]

app.get('/api/artworks', function (req, res) {
  // console.log(req.query.number);
  res.json(artworks);
});


app.post('/api/artworks', function (req, res) {
  var title = req.body.title;
  var artist = req.body.artist;
  var description = req.body.description;
  var newArtwork = { title: title, artist: artist, description: description};
  artworks.push(newArtwork);
});


app.get('/art-gallery', function (req, res) {
  res.sendFile('views/art-gallery.html' , { root : __dirname});
});

 app.listen(3000, function () {
   console.log('Example app listening at http://localhost:3000/');
 });
