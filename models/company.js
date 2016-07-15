module.exports = (sequelize, Sequelize) => {

    var Company = sequelize.define("Company",  {
        name : {
                type: Sequelize.STRING,
                validate: {
                    notEmpty : true
                },
                allowNull : false
        }
    }, {
    classMethods : {
        associate: function(models) {
            Company.hasMany(models.Users);
        }
    }
    })

    return Company;
}