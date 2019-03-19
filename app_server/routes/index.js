var express = require('express');
var router = express.Router();
var ctrlHome = require('../controller/home');
var ctrlBlog = require('../controller/blog');

/* Setup routes to pages */
router.get('/', ctrlHome.index); 
router.get('/bloglist', ctrlBlog.blogList);
router.get('/blogadd', ctrlBlog.blogadd);
router.post('/blogadd', ctrlBlog.addBlog);
router.get('/blogedit/:blogid', ctrlBlog.readOne);
router.put('/blogedit/:blogid', ctrlBlog.editPost);
router.get('/blogdelete/:blogid', ctrlBlog.del);
router.delete('/blogdelete/:blogid', ctrlBlog.deletePost);

module.exports = router;
