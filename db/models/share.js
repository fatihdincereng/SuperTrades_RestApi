const { DataTypes } = require('sequelize');
const Portfolios = require('./portfolio');
const Transactions = require('./transaction')

const Shares = db.define('Shares', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    symbol: {
        type: DataTypes.STRING(3),
        allowNull: false,
        unique: true,
        validate: {
            isUppercase: true,
            len: [3, 3]
        }
    },
    currentPrice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        field: 'currentPrice'
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
});



  



module.exports = Shares;