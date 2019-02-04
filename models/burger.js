
module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
      burger_name: {
          type: DataTypes.STRING,
          allowNull: false
      },
      devoured: {
          type: DataTypes.BOOLEAN,
          defaultValue : false
      }
    },
      {
        freezeTableName: true
      }
    );
    Burger.associate = function(models) {
      Burger.hasOne(models.Customer, {
        onDelete: "cascade"
      });
    };
    return Burger;
  };
