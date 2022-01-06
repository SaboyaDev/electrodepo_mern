import mongoose, { Schema, model } from 'mongoose';

const oderSchema = Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
		orderItems: [
			{
				name: { type: String, required: true },
				qty: { type: Number, required: true },
				image: { type: String, required: true },
				price: { type: Number, required: true },
				product: {
					type: Schema.Types.ObjectId,
					required: true,
					ref: 'Product',
				},
			},
		],
		shippingAddress: {
			address: { type: String, required: true },
			city: { type: String, required: true },
			state: { type: String, required: true },
			zipcode: { type: Number, required: true },
			country: { type: String, required: true },
		},
		paymentMethod: {
			type: String,
			required: true,
		},
		paymentResult: {
			id: String,
			status: String,
			update_time: String,
			email_address: String,
		},
		taxPrice: {
			type: Number,
			required: true,
			default: 0.0,
		},
		shippingPrice: {
			type: Number,
			required: true,
			default: 0.0,
		},
		totalPrice: {
			type: Number,
			required: true,
			default: 0.0,
		},
		isPay: {
			type: Boolean,
			required: true,
			default: false,
		},
		paidAt: Date,
		isDelivered: {
			type: Boolean,
			required: true,
			default: false,
		},
		deliveredAt: Date,
	},
	{
		timestamps: true,
	}
);

const Order = model('Order', orderSchema);

export default Order;
