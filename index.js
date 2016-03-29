var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/user', function(req, res){
  res.status(200).json({ name: 'tobi' });
});

app.listen(3000, function () {
  console.log('Listening on port:3000');
});


module.exports = app;
