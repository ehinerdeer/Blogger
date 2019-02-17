var express = require('express');
var router = express.Router();
var ctrlHome = require('../controller/home');
var ctrlBlogList = require('../controller/bloglist');
var ctrlBlogAdd = require('../controller/blogadd');


/* Setup routes to pages */
router.get('/', ctrlHome.index); 
router.get('/bloglist', ctrlBlogList.bloglist);
router.get('/blogadd', ctrlBlogAdd.blogadd);

module.exports = router;
