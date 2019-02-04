module.exports = function (sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
        customer_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    },
        {
            freezeTableName: true
        }
    );
    Customer.associate = function (models) {
        Customer.belongsTo(models.Burger, {
            foreignKey: {
                allowNull: false
            }
        })
    }
    return Customer
}



// module.exports = function(sequelize, DataTypes) {
//     var Author = sequelize.define("Author", {
//       // Giving the Author model a name of type STRING
//       name: DataTypes.STRING
//     });

//     Author.associate = function(models) {
//       // Associating Author with Posts
//       // When an Author is deleted, also delete any associated Posts
//       Author.hasMany(models.Post, {
//         onDelete: "cascade"
//       });
//     };

//     return Author;
//   };
