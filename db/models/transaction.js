const { DataTypes } = require('sequelize');
const Shares=require('./share');
const Portfolios=require('./portfolio');

const Transactions = db.define('Transactions', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    price: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    quantity: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    type: {
        type: DataTypes.ENUM('buy', 'sell'),
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

Transactions.belongsTo(Shares);
Shares.hasMany(Transactions);

Transactions.belongsTo(Portfolios);
Portfolios.hasMany(Transactions);

module.exports = Transactions;