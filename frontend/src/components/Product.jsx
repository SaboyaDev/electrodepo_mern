// import { Link } from 'react-router-dom';
// import { LinkContainer } from 'react-router-bootstrap';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const Product = ({ product }) => {
	return (
		<Card className='my-3 p-3 rounded'>
			<Card.Link to={`/product/${product._id}`} key={product._id}>
				<Card.Img src={product.image} variant='top' />
			</Card.Link>
			<Card.Body className='mt-3'>
				<Card.Link to={`/product/${product._id}`}>
					<Card.Title>
						<strong>{product.name}</strong>
					</Card.Title>
				</Card.Link>
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
