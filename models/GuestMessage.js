var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

mongoose.connect('mongodb://localhost:27017/webdb', { useCreateIndex:true, useNewUrlParser: true });
var guestMessage = new mongoose.Schema({
    name: String,
    password: String,
    message : String,
    regDate: {
        type: Date,
        default:Date.now
    }
},{
  versionKey : false
});

autoIncrement.initialize(mongoose.connection);
guestMessage.plugin(autoIncrement.plugin,'GuestMessage');
module.exports = mongoose.model("GuestMessage", guestMessage);