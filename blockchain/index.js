module.exports = function (context, req) {

    if (req.query.block) {
        context.res = {
            body: "Stored"
        };
        context.bindings.blockTable = {
            "partitionKey": "hive_memory",
            "rowKey": req.query.block
        }
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a string block on the query string or in the request body"
        };
    }

    context.done();
};