// routes/index.js

const express = require('express');
const router = express.Router();

const itemRoutes = require('./items');
const categoryRoutes = require('./categories');

router.use('/categories', categoryRoutes);
router.use('/items', itemRoutes);

module.exports = router;
