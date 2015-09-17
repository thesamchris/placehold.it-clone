var express = require('express');
var app = express();
var port = 3000;

// Settings
app.set('view engine', 'jade');


app.get('/', function(req, res) {
  res.send('Hello');
});

// Starting server
app.listen(port, function() {
  console.log('Server started on http://localhost:'+ port);
});
