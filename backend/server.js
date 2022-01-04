const express = require('express');
const dotenv = require('dotenv').config();

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

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

app.listen(
	PORT,
	console.log(
		`SERVER RUNNING ON ${process.env.NODE_ENV} mode on port: ${PORT}. 
		 Launch it here --> http://localhost:${PORT}`
	)
);
