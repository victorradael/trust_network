const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://victor:victorvictor@clustertest-u58y1.mongodb.net/test?authSource=admin&replicaSet=ClusterTest-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true',{
    useUnifiedTopology: true,
    useNewUrlParser: true
});
mongoose.Promise = global.Promise;

module.exports = mongoose;