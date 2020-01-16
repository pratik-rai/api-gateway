const express = require('express');
const http = require('http');
const path = require('path');
const reload = require('reload');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const requestHandler = require('./request_handler');
const app = express();

app.set('port', process.env.PORT || 3000);
app.get('/', (req, res) => res.send('Hello World!'));
app.get('/api/gateway/', requestHandler);

app.use(bodyParser.json());
app.use(cookieParser());
const server = http.createServer(app);

reload(app)
	.then(function(reloadReturned) {
		// reloadReturned is documented in the returns API in the README

		// Reload started, start web server
		server.listen(app.get('port'), function() {
			console.log('Web server listening on port ' + app.get('port'));
		});
	})
	.catch(function(err) {
		console.error(
			'Reload could not start, could not start server/sample app',
			err
		);
	});
