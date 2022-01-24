import { LinkContainer } from 'react-router-bootstrap'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
	console.log(product)
	return (
		<Card className='my-3 p-3 rounded text-center'>
			<LinkContainer to={`/product/${product._id}`}>
				<Card.Link key={product._id}>
					<Card.Img src={product.image} variant='top' />
				</Card.Link>
			</LinkContainer>
			<Card.Body className='mt-3'>
				<LinkContainer to={`/product/${product._id}`}>
					<Card.Link>
						<Card.Title>
							<strong>{product.name}</strong>
						</Card.Title>
					</Card.Link>
				</LinkContainer>
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
	)
}

export default Product
