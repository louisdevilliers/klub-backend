const Sequelize = require('sequelize');
const sequelize = require('../database');
//const User = require('./User');
//const Item = require('./Item');

const Order = sequelize.define('Order', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  dateCreated: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
});

//Order.belongsTo(User);
//Order.belongsTo(Item);

module.exports = Order;
