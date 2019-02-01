const usersRoutes = require('./user.route');
const articlesRoutes = require('./article.route');
const express = require('express');
const router = express.Router();

router.use('/users', usersRoutes);
router.use('/articles', articlesRoutes);

module.exports = router;
