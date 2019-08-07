const Like = require('../../models/like');

const createLike = (request, response) => {
  const like = request.body;
  const likeData = Object.assign({}, like);

  const newLike = new Like(likeData);
  
  const sendResponse = (like) => {

    response.json({
      status: 'success',
      like
    });
  };

  const sendError = () => {
    response.status(400);
    response.json({
      error: 'like was not saved'
    });
  };

  newLike.save()
    .then(sendResponse)
    .catch(sendError)

};

module.exports = createLike;