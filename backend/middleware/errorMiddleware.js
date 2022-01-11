const notFound = (err, req, res, next) => {
	const error = new Error(`Not Found ${req.originalURL}`)
	res.status(404)
	next(error)
}

const errorHandler = (err, req, res, next) => {
	const statusCode = res.statusCode === 200 ? 500 : res.statusCode
	// console.log(err)
	res.status(statusCode)
	res.json({
		message: err.message,
		// We only need this in DEV mode
		stack: process.env.NODE_ENV === 'production' ? null : err.stack,
	})
}

export { notFound, errorHandler }
