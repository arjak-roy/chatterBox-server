const mongoose = require('mongoose')
const uri = "mongodb+srv://Arjak_real:Nandini@cluster0.crakkng.mongodb.net/ChatterBox";

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