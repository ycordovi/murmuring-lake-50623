var express = require('express');
var xml =  require('xml');
var request = require("request");

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

/*app.get('/', function(request, response) {
  response.render('pages/index');
  
});*/
app.get('/', function(request, response) {
  response.render('pages/index');
  
});

app.get('/salesforceRequest', function(req, res) {
  
 
	urlAccessToken = 'https://lifetrack--project.cs2.my.salesforce.com/services/data/v34.0'

	var options = {url: urlAccessToken, 
					method: "GET", 
					/*body: bodyBuilder.join('&'),*/
					headers: { //We can define headers too
				        'Content-Type': 'application/json; charset=utf-8;',
                'Authorization': 'Bearer 00DR0000001tS1q!AQ4AQMXgHVXFViZhxNkL1al1gF2ySa.UuiSuNSSeW34qWN2uyPCH3rcYYQ9UlopINWY25w8HZezWLKJ7WP.Kr3RVBGaEqKOt'
				    }} 

	return request(options, function(error, response, body) {
    
    res.write(response.body);
    res.end();
	});

  
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


