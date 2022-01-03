import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';

import Rating from '../components/Rating';

const ProductPage = () => {
	const [product, setProduct] = useState([]);
	let { productId } = useParams();

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const { data } = await axios.get(`/api/products/${productId}`);
				setProduct(data);
			} catch (err) {
				console.error(err);
			}
		};
		fetchProduct();
	}, []);

	return (
		<>
			<LinkContainer to={'/'}>
				<Button variant='outline-dark' className='my-3'>
					Go Back
				</Button>
			</LinkContainer>
			<Row className='my-4'>
				<Col md={5}>
					<Image src={product.image} alt={product.name} fluid />
				</Col>
				<Col md={3}>
					<ListGroup variant='flush'>
						<ListGroup.Item>
							<h3>{product.name}</h3>
						</ListGroup.Item>
						<ListGroup.Item>
							<Rating
								value={product.rating}
								text={`${product.numReviews} reviews`}
							/>
						</ListGroup.Item>
						<ListGroup.Item>
							<strong>Price: </strong> ${product.price}
						</ListGroup.Item>
						<ListGroup.Item>
							<strong>Description: </strong>
							{product.description}
						</ListGroup.Item>
					</ListGroup>
				</Col>
				<Col md={4}>
					<Card>
						<ListGroup varient='flush'>
							<ListGroup.Item>
								<Row>
									<Col>
										<strong>Price: </strong>
									</Col>
									<Col>${product.price}</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>
										<strong>Status: </strong>{' '}
									</Col>
									<Col>
										{product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
									</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item className='d-grid'>
								<Button size='lg' disabled={product.countInStock === 0}>
									add to cart
								</Button>
							</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default ProductPage;
