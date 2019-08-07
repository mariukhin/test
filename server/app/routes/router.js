const express = require('express');
const mainRoute = require('./main/main');
const createUser = require('./user/createUser');
const auth = require('./user/auth');
const verifyToken = require('../modules/check-token');
const logout = require('./user/logout');
const getCurrentUser = require('./user/getCurrentUser');
const createHistory = require('./history/createHistory');
const createLike = require('./like/createLike');
const deleteLike = require('./like/deleteLike');
const updateHistory = require('./history/updateHistory');

const apiRoutes = express.Router();

apiRoutes
  .post('/auth/register', createUser)
  .put('/auth/login', auth)
  // .use(verifyToken)
  .get('/', mainRoute)
  .put('/auth/logout', logout)
  .get('/auth/current', getCurrentUser)
  .post('/history', createHistory)
  .post('/like', createLike)
  .delete('/like/:id', deleteLike)
  .put('/history', updateHistory)

module.exports = apiRoutes;
