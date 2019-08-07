const User = require('../../models/user');

const getCurrent = (req, res) => {
  // const userId = req.body.userId;
  // console.log(req.data);
  User.find({ authorised: true }, onFind).populate('likes').populate('history');

  function onFind(err, user) {
    if (err) {
      res.status(500).json({
        success: false,
        message: 'No user like that',
      });
      return;
    }
    res.status(200).json({
        status: 'success',
        user: user
    });
  }
};

module.exports = getCurrent;