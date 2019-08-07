const Like = require('../../models/like');

const getLike = (request, response) => {
  const id = request.params.id;
  const sendResponse = (like) => {
    response.status(200);
    response.json({
      status: 'success',
      like: like
    });
  };
  const sendError = () => {
    response.status(400);
    response.json({
      status: 'error',
      text: 'there is no such like'
    });
  };

  const findLike = Like.findById(id);
  
  findLike
    .then(sendResponse)
    .catch(sendError);
};

module.exports = getLike;
