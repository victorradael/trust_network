const mongoose = require('../../database');

const UserSchema = new mongoose.Schema({
    name : {
        type: String,
        require: true,
    },

    foneNumber : {
        type: Number,
        require: true,
    },

    friends : [{
        name : {
            type: String,
            require: true,
        },

        friendFoneNumber : {
            type: Number,
            require: true,
        }
    }],

    trustIds : {
        type: Array,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },

})

const User = mongoose.model('User',UserSchema)

module.exports = User;