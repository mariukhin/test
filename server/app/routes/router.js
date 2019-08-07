const express = require('express');
const mainRoute = require('./main/main');
const getAllTopics = require('./topics/getAllTopics');
const createTopic = require('./topics/createTopic');
const getAllLinks = require('./links/getAllLinks');
const createLink = require('./links/createLink');
// const createUser = require('./user/createUser');
// const getAllProducts = require('./products/getAllProducts');
// const getProduct = require('./products/getProduct');
// const getUser = require('./user/getUser');
// const getOrder = require('./order/getOrder');
// const getComment = require('./comment/getComment');
// const createOrder = require('./order/createOrder');
// const createProduct = require('./products/createProduct');
// const updateUser = require('./user/updateUser');
// const updateProduct = require('./products/updateProduct');
// const auth = require('./user/auth');
// const getCurrent = require('./user/getCurrent');
// const verifyToken = require('../modules/check-token');
// const createIngredient = require('./ingredients/createIngredient');
// const createComment = require('./comment/createComment');
// const logout = require('./user/logout');

const apiRoutes = express.Router();

apiRoutes
  .get('/', mainRoute)
  .get('/topics', getAllTopics)
  .get('/links', getAllLinks)
  // .get('/links', getAllLinks)
  // .get('/postss', getAllPosts)
  // .get('/posts/:id', getPost)
  // .get('/orders/:id', getOrder)
  // .get('/auth/logout', logout)
  // .get('/auth/current', getCurrent)
  // .get('/comments/:id', getComment)
  .post('/topic', createTopic)
  .post('/link', createLink)
  // .post('/orders', createOrder)
  // .post('/products', createProduct)
  // .post('/ingredients', createIngredient)
  // .post('/comments', createComment)
  // .put('/users/:id', updateUser)
  // .put('/products/:id', updateProduct);

module.exports = apiRoutes;
