var express = require('express');
var app = express();

var monk = require('monk');
var restaurants = monk('localhost:27017/restaurants').get('favorites');

app.use('/', express.static(__dirname + '/'));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get('/favorites', function (req, res) {
  restaurants.find({}, function (err, docs) {
    if (err == null) {
      res.json(docs);
    } else {
      console.log(err);
    }
  });
});

app.get('/salad', function (req, res) {
  restaurants.find({type: "Salad"}, function (err, docs) {
    if (err == null) {
      res.json(docs);
    } else {
      console.log(err);
    }
  });
});

app.listen(3000, function() {
    console.log("Server ready. Listening on port 3000");
});