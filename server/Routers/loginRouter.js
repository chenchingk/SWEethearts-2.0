const express = require('express');
const authController = require('../Controllers/authController.js');
const passport = require('passport');

const router = express.Router();
// when get a post request fine and compare user
router.post('/', passport.authenticate('local'), (req, res) => {
  const { user } = req;
  // console.log('user');
  res.json(user.username);
});

module.exports = router;
