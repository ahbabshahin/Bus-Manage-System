const mongoose = require('mongoose');
const validator = require('validator');
const mongoooseTypePhone = require('mongoose-type-phone');

const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide name'],

            minlength: 4,
            maxlength: 50
        },

        email: {
            type: String,
            unique: true,
            required: [true, 'Email field is required'],
            validate: {
                validator: validator.isEmail,
                message: 'Please provide valid email'
            },

        },

        password: {
            type: String,
            required: [true, 'Password field is required'],
            minlength: 6,
        },

        contacts: {
            type: mongoose.SchemaTypes.mongoooseTypePhone,
            required: [true, 'Please provide your Phone number'],
        },

        role: {
            type: String,
            enum: ['student', 'teacher', 'admin ', 'staff', 'driver'],
            default: 'student',
        },

        routeNo: {
            type: Number,
            enum: [1, 2, 3],
            default: 1,
        },

        department: {
            type: String,
            enum: [
                'CSE',
                'BBA',
                'EEE',
                'English',
                'LLB',
                'ECO',
                'SE'
            ],
            default: 'CSE'
        },

        studentId: {
            type: String,
            unique: true,
        },
        batch: {
            type: Number,
        },
        section: {
            type: String,
        }
    },

    { timestamps: true },
);


UserSchema.pre('save', async function () {
    if (!this.isModified('password'))
        return;

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.comparePassword = async function (candidatePassword) {
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
}

module.exports = mongoose.model('User', UserSchema);