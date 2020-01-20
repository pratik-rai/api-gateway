const express = require('express');
const multer = require('multer');
const cookieParser = require('cookie-parser');
const upload = multer();
const requestHandler = require('./request_handler');
const app = express();

app.set('port', process.env.PORT || 3000);
app.use(upload.array());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/api/gateway/', requestHandler);

app.listen(app.get('port'), function() {
	console.log('Web server listening on port ' + app.get('port'));
});
