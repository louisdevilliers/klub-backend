const Sequelize = require('sequelize');
const sequelize = require('../database');
//const Item = require('./Item');

const Category = sequelize.define('Category', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  isActive: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
});

//Category.hasMany(Item);

module.exports = Category;
