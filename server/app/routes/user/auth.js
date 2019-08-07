const jwt = require('jsonwebtoken');
const User = require('../../models/user');
const bcrypt = require('bcrypt');
const app = require('../../modules/app')

const errorResp = {
  success: false,
  message: 'Authentication failed.',
};

const passwMatches = (passw1, hash) => bcrypt.compareSync(passw1, hash);

const authenticate = (req, res) => {
  const userId = req.body.userId;
  const password = req.body.password;

  User.findById(userId, onFind);

  const sendError = () => {
    res.status(400);
    res.json({
      status: 'error',
      text: 'there is no such user'
    });
  };

  const sendResponse = (user) => {
    if (!user) {
      return sendError();
    }
  
    res.json({
      status: 'success',
      user: user
    });
  };

  User.findOneAndUpdate({ _id: userId }, { authorised: true},
    function(err, hist) {
        if (err) throw err;
        return hist;
    }
  )
  .then(sendResponse)
  .catch(sendError)

  function onFind(err, user){
    if (err) throw err;

    const correctPassword = passwMatches(password, user.password);
    if (!user || !correctPassword) {
      res.json(errorResp);
      return;
    }
  }
};

module.exports = authenticate;