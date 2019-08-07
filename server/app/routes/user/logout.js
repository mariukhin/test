const User = require('../../models/user');

const logout = (request, response) => {
  const userId = request.body.userId;

  const sendError = () => {
    response.status(400);
    response.json({
      status: 'error',
      text: 'there is no such user'
    });
  };

  const sendResponse = (logoutUser) => {
    if (!logoutUser) {
      return sendError();
    }

    response.json({
      status: 'success',
      user: "You have succesfully logged out!"
    });
  };
    User.findOneAndUpdate({ _id: userId }, { authorised: false},
        function(err, hist) {
            if (err) throw err;
            return hist;
        }
    )
    .then(sendResponse)
    .catch(sendError)

};
module.exports = logout;