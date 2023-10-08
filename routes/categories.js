const express = require('express');
const router = express.Router();
const categories = require('../controllers/categories');

router.post('/addCategory', categories.addCategory);
router.get('/getCategories', categories.getCategories);

module.exports = router;