const express = require('express');
const app = express();
const port = 5000;
let products = require('./data/products');

app.get('/', (req, res) => {
	res.send('REST API is running...');
});

app.get('/api/products', (req, res) => {
	res.json(products);
});

app.get('/api/products/:id', (req, res) => {
	const product = products.find((product) => product._id === req.params.id);
	res.json(product);
});

app.listen(port, () => {
	console.log(`Listening on port: ${port} at http://localhost:${port}`);
});
