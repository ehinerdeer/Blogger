var express = require('express');
var router = express.Router();
var ctrlBlog = require('../controller/blog');

router.get('/blog', ctrlBlog.blogList);
router.post('/blog/blogadd', ctrlBlog.addOne);
router.get('/blog/blogadd/:blogid', ctrlBlog.readOne);
router.put('/blog/blogedit/:blogid', ctrlBlog.editOne);
router.delete('/blog/blogdelete/:blogid', ctrlBlog.deleteOne);

module.exports = router;
