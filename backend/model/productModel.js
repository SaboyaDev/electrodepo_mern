import mongoose, { Schema } from 'mongoose';
import Review from './reviewModel.js';

const productSchema = new Schema({
	// Which Admin User Added the product
	user: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'User',
	},
	name: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	brand: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	reviews: [reviewSchema],
	rating: {
		type: Number,
		required: true,
		default: 0,
	},
	numReviews: {
		type: Number,
		required: true,
		default: 0,
	},
	price: {
		type: Number,
		required: true,
		default: 0,
	},
	countInStock: {
		type: Number,
		required: true,
		default: 0,
	},
});

const Product = mongoose.model('Product', productSchema);

export default Product;
