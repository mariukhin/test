const History = require('../../models/history');

const updateHistory = (request, response) => {
  const history = request.body;
  const id = request.params.id;

  const sendError = () => {
    response.status(400);
    response.json({
      status: 'error',
      text: 'there is no such history'
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

    History.findOneAndUpdate({ _id: id }, history,
        function(err, hist) {
            if (err) throw err;
            return hist;
        }
    )
    .then(sendResponse)
    .catch(sendError)

};

module.exports = updateHistory;