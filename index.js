const express = require('express');
const requestHandler = require('./request_handler');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/api/gateway/', requestHandler);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
