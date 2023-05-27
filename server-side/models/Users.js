const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Please provide name'],

		minlength: 4,
		maxlength: 50,
	},

	email: {
		type: String,
		unique: true,
		required: [true, 'Email field is required'],
		validate: {
			validator: validator.isEmail,
			message: 'Please provide valid email',
		},
	},

	password: {
		type: String,
		required: [true, 'Password field is required'],
		minlength: 6,
	},

	contacts: {
		type: String,
		required: [true, 'Please provide your Phone number'],
	},

	role: {
		type: String,
		enum: ['student', 'teacher', 'admin', 'staff', 'driver'],
		default: 'student',
	},

	routeNo: {
		type: String,
		enum: ['Chottor', 'Kazir Bazar', 'Temuki'],
		default: 'Chottor',
		// required: true,
	},
	timeSlot: {
		type: String,
		// required: true
	},

	department: {
		type: String,
		enum: ['CSE', 'BBA', 'EEE', 'English', 'LLB', 'ECO', 'SE'],
		default: 'CSE',
	},

	studentId: {
		type: String,
	},

	batch: {
		type: Number,
	},
	section: {
		type: String,
	},
});

UserSchema.pre('save', async function () {
	// console.log(this.modifiedPaths());
	// console.log(this.isModified('name'));
	if (!this.isModified('password')) return;
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.comparePassword = async function (canditatePassword) {
	const isMatch = await bcrypt.compare(canditatePassword, this.password);
	return isMatch;
};

module.exports = mongoose.model('User', UserSchema);
