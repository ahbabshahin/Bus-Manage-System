require('dotenv').config();

require('express-async-errors');
const express = require('express');
const app = express();

// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// extra packages
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// database
const connectDB = require('./db/connect');

// router
const busRouter = require('./routes/busRoutes');
const authRouter = require('./routes/authRoutes');
const userRouter = require('./routes/userRoutes');
const routeStartRouter = require('./routes/routeStartRouter');
const routeStoppagesRouter = require('./routes/routeStoppagesRouter');
const timeSlotRouter = require('./routes/timeSlotRoutes');
const checkEmptySeatRouter = require('./routes/checkEmptySeatRoutes');
const iAmInRouter = require('./routes/iAmInRoute');
// const estimateRouter = require('./routes/estimateNumberOfPassengerRoute');

app.use(morgan('tiny'));
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));
app.use(cors());

app.get('/', (req, res) => {
	res.send('test-api');
});

app.get('/api/v1', (req, res) => {
	console.log(req.signedCookies);
	res.send('test-api');
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/routeStart', routeStartRouter);
app.use('/api/v1/stoppage', routeStoppagesRouter);
app.use('/api/v1/bus', busRouter);
app.use('/api/v1/timeSlots', timeSlotRouter);
app.use('/api/v1/checkEmptySeat', checkEmptySeatRouter);
app.use('/api/v1/iAmIn', iAmInRouter);
// app.use('/api/v1/estimate', estimateRouter);

// middleware use
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		app.listen(port, () =>
			console.log(`Server is listening on port ${port}...`)
		);
	} catch (error) {
		console.log(error);
	}
};

start();
