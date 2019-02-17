/* GET BLOG LIST PAGE */
module.exports.bloglist = function(req , res) {
    res.render('bloglist' , {title: 'Check Out The Latest Blogs!'});
};
