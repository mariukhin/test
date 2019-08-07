const Link = require('../../models/link');

const getAllLinks = (request, response) => {
  const sendResponse = (link) => {
    response.status(200);
    response.json(link);
  };

  Link
    .find()
    .then(sendResponse)
    .catch(err => {
      console.error(err)
    });
};

module.exports = getAllLinks;
