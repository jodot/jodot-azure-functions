// Example request: http://localhost/api/retrieve?RowKey=1

var azure = require('azure-storage'); // See npm details for req connection info
var tableService = azure.createTableService(); 

module.exports = function (context, req) {

    if (req.query.RowKey) {
        tableService.retrieveEntity('Block', 'hive_memory', req.query.RowKey, function(error, result, response) {
            if (!error) {              
                context.res = {
                    body: response.body.Hash
                };
                context.done();
            } else {
                context.log(error);
                context.res = {
                    status: 500,
                    body: "A general server error has occured for some reason :)"
                };
                context.done();
            }
        });
    } else {
        context.res = {
            status: 400,
            body: "Please pass the RowKey on the query string or in the request body"
        };
        context.done();
    }



};
