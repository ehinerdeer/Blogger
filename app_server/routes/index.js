var express = require('express');
var router = express.Router();
var ctrlHome = require('../controller/home');
var ctrlBlog = require('../controller/blog');
/*var ctrlBlogAdd = require('../controller/blog');*/


/* Setup routes to pages */
router.get('/', ctrlHome.index); 
router.get('/blog', ctrlBlog.blogList);
router.post('/blog', ctrlBlog.addBlog);
router.get('/blog/:blogid', ctrlBlog.readOne);
router.put('/blog/:blogid', ctrlBlog.editPost);
router.delete('/blog/:blogid', ctrlBlog.deletePost);

module.exports = router;
