const express = require('express');
const router = express.Router();
const items = require('../controllers/items');

router.post('/items', items.addItem);

module.exports = router;
