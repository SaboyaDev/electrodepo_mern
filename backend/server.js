import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'

import productRoutes from './routes/productRoutes.js'

dotenv.config()

connectDB()

const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
	res.send('REST API is running...')
})

app.use('/api/products', productRoutes)

app.listen(
	PORT,
	console.log(
		`\nSERVER RUNNING ON ${process.env.NODE_ENV} mode on port: ${PORT} Launch it here --> http://localhost:${PORT}\n`
			.yellow.bold
	)
)
