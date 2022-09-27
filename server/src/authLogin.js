const express = require('express');
const jwt = require('jsonwebtoken');
const User = require("./userModel")

const app = express.Router();


app.post('/login', function(req, res) {
    const {username,password} = req.body;

  User.findOne({username: username}).select("+password").exec(function(err, user) {
    if (err) {
      res.status(500).send(err);
    } else if (!user) {
      res.status(401).send({
        success: false,
        message: 'Invalid username or password'
      });
    } else {
      user.comparePassword(password, function(err, isMatch) {
        if (err) {
          res.status(500).send(err);
        } else if (!isMatch) {
          res.status(401).send({
            success: false,
            message: 'Invalid username or password'
          });
        } else {
            const {_id, fullname, username, role} = user.toJSON();
            var token = jwt.sign({fullname, username, _id, role}, process.env.JWT_SECRET, {
                expiresIn: '12h'
            });
    
            res.send({
                success: true,
                message: 'Successfully logged in',
                token: token,
                admin: (role == "admin")
            });
        }
      });
    }
  });
});


//signup
app.post('/signup', function(req, res) {
    const {fullname,username,password} = req.body;
    var createdUser = new User({fullname,username,password});
    createdUser.save(
    function(err, user) {
      if (err) {
        res.status(500).send(err);
      }  else {
            const {fullname, username, _id, role} = user.toJSON()
            var token = jwt.sign({fullname, username, _id, role}, process.env.JWT_SECRET, {
              expiresIn: '12h'
            });
  
            res.send({
              success: true,
              message: 'Successfully signup in',
              token: token,
              admin: (role == "admin")
            });
          }
        });
});
module.exports = app;