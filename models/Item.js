const Sequelize = require('sequelize');
const sequelize = require('../database');
//const Order = require('./Order');
//const Category = require('./Category');

const Item = sequelize.define('Item', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
  },
  isActive: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
});

//Item.belongsTo(Category);
//Item.hasMany(Order);


module.exports = Item;
