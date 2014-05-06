module.exports = function(sequelize, DataTypes) {
  console.log(sequelize);
  var halte = sequelize.define('halte', {
    idHalte: DataTypes.INTEGER,
    koridor_number: DataTypes.INTEGER,
    halte: DataTypes.STRING,
    longitude: DataTypes.FLOAT,
    latitude: DataTypes.FLOAT,
  }, {
    associate: function(models) {
      //halte.hasMany(models.halte)
    }
  })

  return halte
}
