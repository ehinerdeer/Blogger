/* GET BLOG ADD PAGE */
module.exports.blogadd = function(req , res) {
    res.render('blogadd' , {title : 'Add Your Blog' });
};

/*GET BLOG LIST PAGE */
module.exports.bloglist = function(req , res) {
    res.render('bloglist' , {title : 'Blog List' });
};

