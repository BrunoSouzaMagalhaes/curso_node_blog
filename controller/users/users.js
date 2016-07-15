
var db = require("./../../models");
var companyService = require("./../../services/company");
var async = require('async');

module.exports = {
   index :  function(req, res, next) {

       db.Users
           .findAndCountAll()
           .then((result) =>{
                if(!result.rows){
                    return;
                }
               return res.render('users/index', { users: result.rows });
            })
            .catch((err) => {
                console.log(err);
            })

   },
    novo : function (req, res, next) {

        async.waterfall([
            function (doNext){
                companyService.getAllCompanies(function (err, companies) {
                    if(err) return;
                    doNext(null, companies)
                });
            }
        ], function (err, companies) {
            console.log(companies,err)
            return res.render('users/novo',{companies: companies})
        });
    },
    salvar : function(req, res, next){

        db.Users
            .create( req.body )
            .then((user) => {
                return res.redirect("/users");
            })
            .catch((err) => {
                console.log(err);
                return;
            })

        return res.redirect("/users");
    },
    deletar : function(req, res, next){

        db.Users
            .destroy({
                where : {
                    id: req.params.id
                }
            })
            .then(() => {
                    return res.redirect("/users");
            })
            .catch((err) => {
                return console.log(err);
            })
    },
    buscar: function (req, res, next) {
        db.Users.findOne({
            where: {
                id: req.params.id
            }
        })
        .then((result) => {
            console.log(req.params.id);
            console.log(result);
                return res.status(200)
                    .json({
                        status: true,
                        data: result
                    })
        })
        .catch((err) => {
            console.log(err);
        });
    }

};
