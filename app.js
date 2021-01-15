const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('<h2>Hello Marouane!</h2><h4>Unbelivably easy to push and deploy</h4>'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
