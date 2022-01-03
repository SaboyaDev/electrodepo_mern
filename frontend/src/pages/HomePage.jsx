import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';

const HomePage = () => {
	const [products, setProducts] = useState([]);

	// Similar to LifeCycle componentDidMount()
	useEffect(() => {
		const fetchProducts = async () => {
			const { data } = await axios.get('/api/products');
			console.log(data);
			setProducts(data);
		};

		fetchProducts();
	}, []); // Similar to LifeCycle componentDidMount()

	return (
		<>
			<h1 className='text-center'>Latest Products</h1>
			<Row>
				{products.map((product) => (
					<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
						<Product product={product} />
					</Col>
				))}
			</Row>
		</>
	);
};

export default HomePage;
