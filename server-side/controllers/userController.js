const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');
const { createTokenUser, attachCookiesToResponse } = require('../utils');

const getAllUsers = async (req, res) => {
    const users = await User.find({}).select('-password');

    res.status(StatusCodes.OK).json({ users });
};

const getSingleUser = async (req, res) => {

    const user = await User.findOne({ _id: req.params.id });

    if (!user) {
        throw new CustomError.NotFoundError(`No user with id ${req.params.id}`);
    }

    res.status(StatusCodes.OK).json({ user });
};

const showCurrentUser = async (req, res) => {
    res.status(StatusCodes.OK).json({ user: req.user });
};

const updateUser = async (req, res) => {
    const user = await User.findOneAndUpdate({ _id: req.user.userId },
        req.body,
        {
            new: true,
            runValidators: true
        });

        const tokenUser = createTokenUser(user);
        attachCookiesToResponse({res, user: tokenUser});

        res.status(StatusCodes.OK).json({user: tokenUser});
};

const updateUserPassword = async (req, res) =>{
    const {oldPassword, newPassword} = req.body;

    if(!oldPassword || !newPassword){
        throw new CustomError.BadRequestError('Please provide both value');
    }

    const user = await User.findOne({_id: req.user.userId});

    if(!isPasswordCorrect){
        throw new CustomError.UnauthenticatedError('Invalid Credentials');
    }

    user.password = newPassword;

    await user.save();

    res.status(StatusCodes.OK).json({msg: 'Password Updated'});
}

module.exports = {
    getAllUsers,
    getAllUsers,
    showCurrentUser,
    updateUser,
    updateUserPassword,
}