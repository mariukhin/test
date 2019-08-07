const Topic = require('../../models/topic');

const getAllTopics = (request, response) => {
  const sendResponse = (product) => {
    response.status(200);
    response.json(product);
  };

  Topic
    .find()
    .then(sendResponse)
    .catch(err => {
      console.error(err)
    });
};

module.exports = getAllTopics;
