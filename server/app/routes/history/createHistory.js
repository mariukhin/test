const History = require('../../models/history');

const createHistory = (request, response) => {
  const history = request.body;
  const historyData = Object.assign({}, history);

  const newHistory = new History(historyData);
  
  const sendResponse = (history) => {

    response.json({
      status: 'success',
      history
    });
  };

  const sendError = () => {
    response.status(400);
    response.json({
      error: 'history was not saved'
    });
  };

  newHistory.save()
    .then(sendResponse)
    .catch(sendError)

};

module.exports = createHistory;