var db = require("./../models");
var companyService = {
    getAllCompanies : function (callback)
    {
         db.Company
             .findAll()
             .then((result) => {
                 return callback (null,result);
             })
             .catch((err) => {
                callback (err, null);
             });
    }
}

module.exports = companyService;