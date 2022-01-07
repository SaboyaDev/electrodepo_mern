import mongoose from 'mongoose';
import dotenv from 'dotenv';
import users from './data/users.js';
import products from './data/products.js';
import User from './model/userModel.js';
import Product from './model/productModel.js';
import Order from './model/orderModel.js';
import connectDB from './config/db.js';
import colors from 'colors';

dotenv.config();

connectDB();

const importData = async () => {
	try {
		await Order.deleteMany();
		await Product.deleteMany();
		await User.deleteMany();

		const createdUsers = await User.insertMany(users);

		const adminUser = createdUsers[0]._id;

		const sampleProducts = products.map((product) => {
			return { ...product, user: adminUser };
		});

		await Product.insertMany(sampleProducts);

		console.log('\nData Imported\n'.green.inverse);
		process.exit();
	} catch (error) {
		console.error(`${error}`.red.inverse);
		process.exit(1);
	}
};

const destroyData = async () => {
	try {
		await Order.deleteMany();
		await Product.deleteMany();
		await User.deleteMany();

		console.log('\nData Destroyed\n'.red.inverse);
		process.exit();
	} catch (error) {
		console.error(`${error}`.red.inverse);
		process.exit(1);
	}
};

process.argv[2] === '-d' ? destroyData() : importData();
