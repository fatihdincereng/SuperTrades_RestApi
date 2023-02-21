const { DataTypes } = require('sequelize');
const Users = require('./user');

const Portfolios = db.define('Portfolios', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'created_at'
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'updated_at'
  }
}, {});


Portfolios.belongsTo(Users);
Users.hasMany(Portfolios);



module.exports = Portfolios;