const User = require('../../models/user');

const updateUser = (request, response) => {
  const user = request.body;
  const id = request.params.id;

  const sendError = () => {
    response.status(400);
    response.json({
      status: 'error',
      text: 'there is no such user'
    });
  };

  const sendResponse = (newHistory) => {
    if (!newHistory) {
      return sendError();
    }

    response.json({
      status: 'success',
      history: newHistory
    });
  };

    User.findOneAndUpdate({ _id: id }, user,
        function(err, hist) {
            if (err) throw err;
            return hist;
        }
    )
    .then(sendResponse)
    .catch(sendError)

};

module.exports = updateHistory;