var express = require('express');
var app = express();
var port = 3000;

// Settings
app.set('view engine', 'jade');


app.get('/:width/:height', function(req, res) {
  var w = req.params.width;
  var h = req.params.height;

  res.render('img', {'w':w , 'h': h});
});

// Starting server
app.listen(port, function() {
  console.log('Server started on http://localhost:'+ port);
});
