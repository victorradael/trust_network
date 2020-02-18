const mongoose = require('mongoose')
const { connect } = require('./cred.json')

mongoose.connect(connect, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
mongoose.Promise = global.Promise;

module.exports = mongoose;