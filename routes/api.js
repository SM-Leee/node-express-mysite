var express = require('express');
var User = require('../models/User');
var router = express.Router();

router.route('/user/checkEmail').get( function(req, res, next) {
  User.findOne({email: req.query.email}, ["_id"], function (err, user){
    if(err){
      next(err);
      return;
    }
    console.log(user);
    res.json({result:"success",
      date:(user == null) ?"not exists":"exists"});
  });

});

module.exports = router;
