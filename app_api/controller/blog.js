var mongoose = require('mongoose');
var blogSchema = mongoose.model('myblog');

var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
}

module.exports.blogList = function(req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};

module.exports.addOne = function(req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};

module.exports.readOne = function(req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};

module.exports.editOne = function(req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};

module.exports.deleteOne = function(req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
