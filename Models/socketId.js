const mongoose = require('mongoose')
const uri = "mongodb://localhost:27017/Chatterbox";

mongoose.createConnection(process.env.MONGODB_UR);

var socketId = mongoose.Schema({
    socketId: {
        type: String,
        reqiured: true
    },
    emailId:{
        type: String,
        reqiured : true
    }
});

module.exports = mongoose.model('socketId', socketId);