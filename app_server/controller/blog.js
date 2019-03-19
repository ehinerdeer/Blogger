/*REQUEST */
var request = require('request');
var apiOptions = {
    server: 'http://3.91.187.239'
}

/* GET BLOG ADD PAGE */
module.exports.blogadd = function(req , res) {
    res.render('blogadd' , {
	title : 'Add Your Blog',});
};

/* ADD BLOG PAGE */
module.exports.addBlog = function(req , res) {
    var requestOptions, path , postdata;
    path = '/api/blog/';
    postdata = {
	blogTitle: req.body.blogTitle,
	blogText: req.body.blogText,
	createdDate: Date.now
    };

    requestOptions = {
	url : apiOptions.server + path,
	method : "POST",
	json : postdata
    };
    request(
	requestOptions,
	function(err, response, body) {
	    if(response.statusCode === 201) {
		res.redirect('/bloglist');
	    } else {
		_showError(req, res, response.statusCode);
	    }
	}
    );
};

var _showError = function(req, res, status) {
    var title, content;
    if(status === 404) {
	title = "404, Page Not Found";
	content = "Sorry! Looks like your page cannot be found! (-_-)";
    }else if (status === 500) {
	title = "500, Internal Server Error";
	content = "Wow, our bad, there is a problem with our server.";
    } else {
	title = status + ", Something's Gone Wrong!";
	content = "Something has happened, Sorry!";
    }
    res.status(status);
    res.render('errorPage', {
        title : title,
        content : content
    });
};

/*GET BLOG LIST PAGE */
module.exports.blogList = function(req , res) {
    var requestOptions, path;
    path = '/api/blog';
    requestOptions = {
	url : apiOptions.server + path,
	method : "GET",
	json : {},
        qs : {}
    };
    request(
	requestOptions,
	function(err, response, body) {
	    if(err){
		console.log(err);
	    } else if (response.statusCode === 200) {
		console.log("Blogs Found: " + body.length);
	        renderBlogList(req, res, body);
	    } else {
		console.log(response.statusCode);
	    }
	}
    );
};

/*Render Blog List Page*/
var renderBlogList = function(req, res, responseBody) {
    res.render('bloglist' , {
	title : 'Blog List',
	pageHeader : 'Blog List',
	blogs: responseBody
    });
};

/*GET BLOG EDIT PAGE*/
module.exports.readOne = function(req , res) {
    var requestOptions, path;
    path = "/api/blog/" + req.params.id;
    requestOptions = {
	url : apiOptions.server + path,
	method : "GET",
	json : {}
    };
    request(
	requestOptions,
	function(err, response, body) {
	    renderBlogEdit(req, res, body);
	}
    );
};

/*Render BLOG EDIT PAGE */
var renderBlogEdit = function(req, res, responseBody) {
    res.render('blogedit' , {
	title: 'Blog Info',
	pageHeader: {
	    title: 'Blog Info'
	},
	blog : responseBody
    })
};
/*Blog Edit Post*/
module.exports.editPost = function(req, res) {
    var requestOptions, path, postdata;
    var id = req.params.id;
    path = '/api/blog/' + id;

    postdata = {
	blogTitle: req.body.blogTitle,
	blogText: req.body.blogText
    };

    requestOptions = {
	url : apiOptions.server + path,
	method : "PUT",
	json : postdata
    };
    request(
	requestOptions,
	function(err, response, body) {
	    if(response.statusCode === 201) {
		res.redirect('/bloglist');
	    } else {
		_showError(req, res, response.statusCode);
	    }
	}
    );
};

/*OLD RENDER EDIT CODE
    res.render('blogedit' , {
	title: 'Edit Your Blog' });
};*/

/*BLOG DELETE*/
module.exports.del = function(req, res) {
    var requestOptions, path;
    path = '/api/blog/' + req.params.id;
    requestOptions = {
	url : apiOptions.server + path,
	method : "GET",
	json : {}
    };
    request(
	requestOptions,
	function(err, response, body) {
	    renderDeletePage(req, res, body);
	}
    );
};

/*RENDER DELETE PAGE */
var renderDeletePage = function(req, res, responseBody) {
    res.render('blogdelete', {
	title : 'Delete Blog',
	pageHeader: {
	    title : 'Delete Blog'
	},
	blog: responseBody
    });
};

/*BLOG DELETE POST*/
module.exports.deletePost = function(req, res) {
    var requestOptions, path , postdata;
    var is = req.params.id;
    path = '/api/blog/' + id;

    requestOptions = {
	url : apiOptions.server + path,
	method : "DELETE",
	json : {}
    };

    request(
	requestOptions,
	function(err, response, body) {
	    if(response.statusCode === 204) {
		res.redirect('/bloglist');
	    } else {
		_showError(req, res, response.statusCode);
	    }
	}
    );
};
/*OLD DELETE CODE
module.exports.blogdelete = function(req , res) {
    res.render('blogdelete', {
	title: 'Blog Deleted' });
}; */
