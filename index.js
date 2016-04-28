var express = require('express');
var xml =  require('xml');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
  
});

app.post('/sample', function(request, response) {
  response.set('Content-Type', 'application/xml');
  response.sendFile(__dirname + '/public/sample.xml');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


