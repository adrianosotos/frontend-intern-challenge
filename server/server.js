const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/products', (req, res) => {
	let url = 'https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1';
	fetch(url).then((response) => response.json()).then((contents) => console.log(contents));
});

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);
