import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const Product = ({ product }) => {
	return (
		<Card className='my-3 p-3 rounded'>
			<a href={`/product/${product._id}`}>
				<Card.Img src={product.image} variant='top' />
			</a>
			<Card.Body className='mt-3'>
				<a href={`/product/${product._id}`}>
					<Card.Title>
						<strong>{product.name}</strong>
					</Card.Title>
				</a>
				<Card.Text as='div' className='mt-3'>
					<Rating
						value={product.rating}
						text={`${product.numReviews} reviews`}
					/>
				</Card.Text>
				<Card.Text as='h3' className='mt-3'>
					${product.price}
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default Product;
