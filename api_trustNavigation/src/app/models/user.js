const mongoose = require('../../database');

const UserSchema = new mongoose.Schema({
    name : {
        type: String,
        require: true,
    },

    foneNumber : {
        type: String,
        require: true,
    },

    friends : [{
        name : {
            type: String,
            require: true,
        },

        friendFoneNumber : {
            type: String,
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