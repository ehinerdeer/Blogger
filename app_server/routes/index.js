var express = require('express');
var router = express.Router();
var ctrlHome = require('../controller/home');
var ctrlBlog = require('../controller/blog');
/*var ctrlBlogAdd = require('../controller/blog');*/


/* Setup routes to pages */
router.get('/', ctrlHome.index); 
router.get('/bloglist', ctrlBlog.bloglist);
router.get('/blogadd', ctrlBlog.blogadd);
router.get('/blogedit', ctrlBlog.blogedit);
router.get('/blogdelete', ctrlBlog.blogdelete);

module.exports = router;
