var express = require('express');
var router = express.Router();
var ctrlHome = require('../controller/home');
var ctrlBlog = require('../controller/blog');
/*var ctrlBlogAdd = require('../controller/blog');*/


/* Setup routes to pages */
router.get('/', ctrlHome.index); 
router.get('/bloglist', ctrlBlog.blogList);
router.get('/blogadd', ctrlBlog.blogadd);
router.post('/blog/blogadd/', ctrlBlog.addBlog);
router.get('/blogedit/:blogid', ctrlBlog.readOne);
router.put('/blogedit/:blogid', ctrlBlog.editPost);
router.delete('/blogdelete/:blogid', ctrlBlog.deletePost);

module.exports = router;
