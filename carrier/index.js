const restify = require('restify');
const stringifyObject = require('stringify-object');

module.exports = function (context, req) {

    const pretty = stringifyObject(req, {
        indent: '  ',
        singleQuotes: false
    });

    res = {
        status: 200,
        body: pretty
    };

    context.done(null, res);
};