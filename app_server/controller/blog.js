/* GET BLOG ADD PAGE */
module.exports.blogadd = function(req , res) {
    res.render('blogadd' , {
	title : 'Add Your Blog',});
};

/*GET BLOG LIST PAGE */
module.exports.bloglist = function(req , res) {
    res.render('bloglist' , {
	title : 'Blog List',
	blog: [{
	           blogTitle: 'My First Blog',
	           blogText: 'This is my first blog. Hopefully this works.',
                   createdDate: new Date("2019-02-18")
	       },
               {
		   blogTitle: 'My Second Blog',
		   blogText: 'This is my second blog',
                   createdDate: new Date("2019-02-18")
	       },
	       {
                   blogTitle: 'My Third Blog',
		   blogText: 'This is my third blog',
		   createdDate: new Date("2019-02-18")
	       }]
	       });
};

