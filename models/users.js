module.exports = (sequelize, Sequelize) => {

    var Users = sequelize.define("Users",  {
        name : {
                type: Sequelize.STRING,
                //defaultValue : "EU mesmo",
                validate: {
                    notEmpty : true,
                    //isAlpha : true,
                    notContainsWhiteSpace: function(value){
                        var whiteSpace = value.split(' ');

                        if(!whiteSpace.length) {
                            throw new Error("Erro, campo com espaço")
                        }
                    }
                },
                allowNull : false
        },
        age: {
            type: Sequelize.INTEGER,
            validate : {
                isInt : true
            }
        }
    }, {
        classMethods : { 
            associate: function(models) {
                Users.belongsTo(models.Company);
            }
        }
    })

    return Users;
}