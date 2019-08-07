const bodyParser = require('body-parser');
const app = require('./app/modules/app');
const morgan = require('morgan');
const router = require('./app/routes/router');
const config = require('./config');

const errorHandler = (req, res, next)  => {
  res.status(500).send('No such page');
  next();
};

const startServer = port => {
  app
    .set('superSecret', config.secret)
    .use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    })
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(morgan('dev'))
    .use('/', router)
    .use(errorHandler);

  app.listen(port);

  console.log('Server was started at http://localhost:' + port);
};

module.exports = startServer;
