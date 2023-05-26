const User = require('../models/Users');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');
const jwt = require('jsonwebtoken');
const { attachCookiesToResponse, createTokenUser } = require('../utils');
// const { rawListeners } = require('../models/User');

const register = async (req, res) => {
	const { email, name, password, contacts } = req.body;

	const emailAlreadyExists = await User.findOne({ email });

	if (emailAlreadyExists) {
		throw new CustomError.BadRequestError(
			'User already exists with this email.'
		);
	}

	// register first user as admin
	// const isFirstUser = await User.countDocuments() === 0;
	// const role = isFirstUser ? 'admin' : 'user';

	const user = await User.create(req.body);

	const tokenUser = createTokenUser(user);

	attachCookiesToResponse({ res, user: tokenUser });

	res.status(StatusCodes.CREATED).json({ user: tokenUser });
};

const login = async (req, res) => {
	const { email, password } = req.body;

	if (!email || !password) {
		throw new CustomError.BadRequestError(
			'Please provide email and password'
		);
	}

	const user = await User.findOne({ email });
	console.log(user);
	if (!user) {
		throw new CustomError.UnauthenticatedError('Invalid Credentials');
	}

	const isPasswordCorrect = await user.comparePassword(password);
	if (!isPasswordCorrect) {
		throw new CustomError.UnauthenticatedError('Invalid Credentials');
	}

	const tokenUser = createTokenUser(user);

	attachCookiesToResponse({ res, user: tokenUser });

	res.status(StatusCodes.OK).json({ user: tokenUser });
};

const adminLogin = async (req, res) => {
	const { email, password } = req.body;
	console.log(req.body);

	if (!email || !password) {
		throw new CustomError.BadRequestError(
			'Please provide email and password'
		);
	}

	const user = await User.findOne({ email });
	console.log(user);
	if (!user || user.role !== 'admin') {
		throw new CustomError.UnauthenticatedError('Invalid Credentials');
	}

	const isPasswordCorrect = await user.comparePassword(password);
	if (!isPasswordCorrect) {
		throw new CustomError.UnauthenticatedError('Invalid Credentials');
	}

	const tokenUser = createTokenUser(user);

	attachCookiesToResponse({ res, user: tokenUser });

	res.status(StatusCodes.OK).json({ user: tokenUser });
};

const logout = async (req, res) => {
	res.cookie('token', 'logout', {
		httpOnly: true,
		expires: new Date(Date.now() + 1000),
	});
	res.status(StatusCodes.OK).json({ msg: 'user logged out!' });
};

module.exports = {
	register,
	login,
	adminLogin,
	logout,
};
