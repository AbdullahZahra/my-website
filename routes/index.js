const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');

router.get('/', articleController.getHome);
router.get('/article/:id', articleController.getArticle);
router.get('/admin', articleController.getAdmin);
router.post('/admin/new-article', articleController.createArticle);

// THIS LINE IS CRITICAL: If it's missing, you get the exact error you are seeing.
module.exports = router;