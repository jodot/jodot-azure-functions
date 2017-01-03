var restify = require('restify');

module.exports = function (context, req) {

    res = {
        status: 200,
        body: "pong"
    };

    context.done(null, res);
};