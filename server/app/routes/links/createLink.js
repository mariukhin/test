const Link = require('../../models/link');

const createLink = (request, response) => {
  const link = request.body;
  const linkData = Object.assign({}, link);

  const newLink = new Link(linkData);
  
  const sendResponse = (link) => {

    response.json({
      status: 'success',
      link
    });
  };

  const sendError = () => {
    response.status(400);
    response.json({
      error: 'link was not saved'
    });
  };

  newLink.save()
    .then(sendResponse)
    .catch(sendError)

};

module.exports = createLink;