var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

mongoose.connect('mongodb://localhost:27017/webdb', { useCreateIndex:true, useNewUrlParser: true });
var user = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    gender: String,
    joinDate: {
        type: Date,
        default:Date.now
    }
},{
  versionKey : false
});

autoIncrement.initialize(mongoose.connection);
user.plugin(autoIncrement.plugin,'User');
module.exports = mongoose.model("User", user);