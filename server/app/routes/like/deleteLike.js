const Like = require('../../models/like');

const deleteLike = (request, response) => {
  const id = request.params.id;
  const sendResponse = () => {
    response.status(200);
    response.json({
      status: 'success',
    });
  };
  const sendError = () => {
    response.status(400);
    response.json({
      status: 'error',
      text: 'there is no such like'
    });
  };

  const deleteLike = Like.deleteOne(id);
  
  deleteLike
    .then(sendResponse)
    .catch(sendError);
};

module.exports = deleteLike;
