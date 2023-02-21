const { DataTypes } = require('sequelize');
const Portfolios = require('./portfolio');
const Shares = require('./share');

const PortfolioShares = db.define('PortfolioShares', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  quantity: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  price: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
});
Portfolios.belongsToMany(Shares, {
  through: PortfolioShares,
});
Shares.belongsToMany(Portfolios, {
  through: PortfolioShares,
});
module.exports = PortfolioShares;
