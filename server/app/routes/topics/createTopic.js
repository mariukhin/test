const Topic = require('../../models/topic');

const createTopic = (request, response) => {
  const topic = request.body;
  const topicData = Object.assign({}, topic);

  const newTopic = new Topic(topicData);
  
  const sendResponse = (topic) => {

    response.json({
      status: 'success',
      topic
    });
  };

  const sendError = () => {
    response.status(400);
    response.json({
      error: 'topic was not saved'
    });
  };

  newTopic.save()
    .then(sendResponse)
    .catch(sendError)

};

module.exports = createTopic;